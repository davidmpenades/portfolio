import { getServerSideProps } from "../lib/fetchData";

export default async function Statistics() {
  const { totalContributions, reposCount } = await getServerSideProps();

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
                  totalContributions
                }
              </dd>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center gap-3">
              <dt className="order-last text-lg font-medium text-gray-400">
                Repositorios públicos
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                {reposCount}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
