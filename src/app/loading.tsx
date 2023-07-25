const loading = () => {
  return (
    <section className="hero py-8 flex flex-col items-center justify-center h-[91vh] text-center space-y-6 p-8">
      <header>
        <div className="bg-gray-300 h-12 w-3/4 md:w-1/2 mx-auto rounded-md animate-pulse"></div>
      </header>
      <div>
        <div className="bg-gray-200 h-8 w-5/6 mx-auto rounded-md animate-pulse"></div>
      </div>
      <div className="flex flex-row space-x-4">
        <div className="bg-gray-300 h-12 w-32 rounded-md animate-pulse"></div>
        <div className="bg-gray-300 h-12 w-20 rounded-md animate-pulse"></div>
      </div>
    </section>
  );
};

export default loading;
