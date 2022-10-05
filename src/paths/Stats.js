import React from "react";

const Stats = () => {
  return (
    <>
      <main className="row py-16">
        <header className="w-full flex justify-center">
          <h1 className="text-center text-4xl font-semibold text-blue-500 mb-10">
            Share Your Stats Here!
          </h1>
          <button className="bg-blue-300 py-2 hover:bg-blue-400 w-20 mb-10 rounded-full transition-all duration-200 border-2 border-black absolute right-48 hidden">
            Upload
          </button>
        </header>
        <div className="w-full h-full flex justify-center">
          <h1 className="text-4xl font-semibold text-blue-500">
            Coming soon...
          </h1>
        </div>
      </main>
    </>
  );
};

export default Stats;
