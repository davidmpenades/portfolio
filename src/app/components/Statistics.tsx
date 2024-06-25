export default async function Statistics() {
  const now = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(now.getFullYear() - 1);

  const res = await fetch("https://api.github.com/users/davidmpenades/repos");
  const data = await res.json();
  
  const res1 = await fetch("https://api.github.com/graphql", {
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
  const data1 = await res1.json();

  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-2 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-300 md:text-4xl">
            Estadísticas en github
          </h2>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center gap-3">
              <dt className="order-last text-lg font-medium text-gray-400">
                Commits último año
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                {
                  data1.data.user.contributionsCollection.contributionCalendar
                    .totalContributions
                }
              </dd>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center gap-3">
              <dt className="order-last text-lg font-medium text-gray-400">
                Repositorios públicos
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                {data.length}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
