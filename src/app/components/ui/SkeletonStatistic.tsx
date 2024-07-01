export default function SkeletonStatistic() {
    return (
      <section className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-2 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="h-8 bg-gray-600 rounded-md w-56 mx-auto md:w-96 md:h-12 animate-pulse"></div>
          </div>
  
          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col w-52 h-36 bg-gray-600 rounded-lg p-8 text-center animate-pulse">
              </div>
              <div className="flex flex-col w-52 h-36 bg-gray-600 rounded-lg p-8 text-center animate-pulse">
              </div>
            </dl>
          </div>
        </div>
      </section>
    );
  }
  