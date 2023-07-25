import React from "react";

const LoadingCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
      {[...new Array(10)].map((item) => (
        <div
          key={item}
          className="border border-primary w-full overflow-hidden h-[26rem] animate-pulse my-10 relative"
        >
          <div className="bg-black mb-4 rounded-md h-80"></div>
          <div className="flex flex-col justify-center">
            <div className="bg-primary h-4 w-3/4 mb-2 rounded-md"></div>
            <div className="bg-gray h-4 w-1/2 rounded-md"></div>
          </div>
          <div className="absolute top-0 bg-primary py-4 px-10"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingCard;
