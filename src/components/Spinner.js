import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[200px]">
      <div className="w-16 h-16 border-4 border-t-transparent border-blue-400 border-solid rounded-full animate-spin shadow-lg shadow-blue-500"></div>
    </div>
  );
};

export default Spinner;
