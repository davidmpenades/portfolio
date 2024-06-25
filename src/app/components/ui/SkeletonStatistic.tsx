export default function SkeletonStatistic() {
    return (
      <section className="bg-gray-900 animate-pulse">
        <div className="mx-auto max-w-screen-xl px-2 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="h-8 bg-gray-700 rounded-md w-96 mx-auto md:w-1/2 md:h-12"></div>
          </div>
  
          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col rounded-lg border border-gray-200 px-4 py-8 text-center gap-3">
                <div className="h-12 bg-blue-400 rounded-md w-1/2 mx-auto md:h-16"></div>
                <div className="h-6 bg-gray-700 rounded-md w-44 mx-auto"></div>
              </div>
              <div className="flex flex-col rounded-lg border border-gray-200 p-8 text-center gap-3">
                <div className="h-12 bg-blue-400 rounded-md w-1/2 mx-auto md:h-16"></div>
                <div className="h-6 bg-gray-700 rounded-md w-44 mx-auto"></div>
              </div>
            </dl>
          </div>
        </div>
      </section>
    );
  }
  