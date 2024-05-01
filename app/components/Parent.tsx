"use client";
import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent: React.FC = () => {
  const [money, setMoney] = useState<number>(0);

  const incrementMoney = () => {
    setMoney((prevMoney) => prevMoney + 1000);
  };

  const decrementMoney = () => {
    setMoney((prevMoney) => prevMoney - 500);
  };

  return (
    <div>
      <p className="text-white bg-blue-700 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 p-2.5 mb-2 w-36 mt-3 dark:bg-blue-600">
        Money: {money}
      </p>
      <Child1 incrementMoney={incrementMoney} />
      <Child2 decrementMoney={decrementMoney} />
    </div>
  );
};

export default Parent;
