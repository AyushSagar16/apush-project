"use client"; // This is a client component

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CounterProps {
  index: number;
  updateMoneySpent: (spent: number) => void;
}

// CHANGE THIS Dictionary TO ADD MORE ITEMS
/*
  0.   Train transportation of one barrel of Rockefeller’s Oil - $1.65 
1. Big Mac - $6
2. The Protestant Work Ethic and the Spirit of Capitalism - $32
Oyster Dinner - $54
Cost of a substitute in the Civil War - $300
Bullmastiff - $2,200
Acre of Farmland - $3,000
Buying out the Clarks - $72,500
Passenger train locomotives - $5,000,000
Gas station - $5,500,000
F1 Car - $15,000,000
Biltmore - $180 million
Rockefeller Center - $1.85 billion
University of Chicago - $11.2 billion 


*/
const counterDictionary: CounterDictionary = {
  // Train transportation of one barrel of Rockefeller’s Oil
  '0': 1.65,
  // Big Mac
  '1': 6,
  // The Protestant Work Ethic and the Spirit of Capitalism
  '2': 32,
  // Oyster Dinner
  '3': 54,
  // Cost of a substitute in the Civil War
  '4': 300,
  // Bullmastiff
  '5': 2200,
  // Acre of Farmland
  '6': 3000,
  // Buying out the Clarks
  '7': 72500,
  // Passenger train locomotives
  '8': 5000000,
  // Gas Station
  '9': 5500000,
  // F1 Car
  '10': 15000000,
  // Biltmore Estate
  '11': 180000000,
  // Rockefeller Center
  '12': 1850000000,
  // University of Chicago
  '13': 11200000000,
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
