"use client";
import React from "react";

interface Child2Props {
  decrementMoney: () => void;
}

const Child2: React.FC<Child2Props> = ({ decrementMoney }) => {
  return (
    <div>
      <button
        onClick={decrementMoney}
        className="text-white bg-blue-700 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600"
      >
        Child 2
      </button>
    </div>
  );
};

export default Child2;
