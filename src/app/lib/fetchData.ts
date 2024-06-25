interface ContributionCalendar {
  totalContributions: number;
}

interface ContributionsCollection {
  contributionCalendar: ContributionCalendar;
}

interface User {
  contributionsCollection: ContributionsCollection;
}

interface Data {
  [data: string]: any;
  user: User;
}

export async function getServerSideProps() {
  const now: Date = new Date();
  const oneYearAgo: Date = new Date(
    now.getFullYear() - 1,
    now.getMonth(),
    now.getDate()
  );

  const res: Response = await fetch(
    "https://api.github.com/users/davidmpenades/repos"
  );
  const data: any[] = await res.json();

  const res1: Response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
                query {
                    user(login: "davidmpenades") {
                        contributionsCollection(from: "${oneYearAgo.toISOString()}", to: "${now.toISOString()}") {
                            contributionCalendar {
                                totalContributions
                            }
                        }
                    }
                }
            `,
    }),
  });
  const data1: Data = await res1.json();
  console.log({
    first:
      data1.data.user.contributionsCollection.contributionCalendar
        .totalContributions,
    second: data.length,
  });

  return {
    totalContributions:
      data1.data.user.contributionsCollection.contributionCalendar
        .totalContributions,
    reposCount: data.length,
  };
}
