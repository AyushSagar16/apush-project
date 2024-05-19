"use client"; // This is a client component

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CounterProps {
  index: number;
  updateMoneySpent: (spent: number) => void;
}

// CHANGE THIS Dictionary TO ADD MORE ITEMS
const counterDictionary: CounterDictionary = {
  // Big Mac
  '0': 6,
  // Gas Station
  '1': 5500000,
  // F1 Car
  '2': 15000000,
  // Biltmore Estate
  '3': 180000000,
}

interface CounterDictionary {
  [key: string]: number;
}

const Counter: React.FC<CounterProps> = ({ index, updateMoneySpent }) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => (prev > 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    var moneySpent = 0;
    for (let key in counterDictionary) {
      var inputVal = document.getElementById(key) as HTMLInputElement;
      var x = inputVal.value;
      moneySpent += parseInt(x) * counterDictionary[key];
    }
    updateMoneySpent(moneySpent);
  }, [value, updateMoneySpent]);

  return (
    <div className='flex justify-center my-2 w-full max-w-sm items-center space-x-2'>
      <Button className='bg-red-500 hover:bg-red-700' onClick={handleDecrement}>
        Sell
      </Button>
      <Input
        className='w-1/5 text-center'
        id={index.toString()}
        type="text"
        value={value.toString()}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <Button className='bg-green-500 hover:bg-green-700' onClick={handleIncrement}>
        Buy
      </Button>
    </div>
  );
};

export default Counter;
