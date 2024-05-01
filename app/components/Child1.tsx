"use client";
import React from "react";

interface Child1Props {
  incrementMoney: () => void;
}

const Child1: React.FC<Child1Props> = ({ incrementMoney }) => {
  return (
    <div>
      <button
        onClick={incrementMoney}
        className="text-white bg-blue-700 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600"
      >
        Child 1
      </button>
    </div>
  );
};

export default Child1;
