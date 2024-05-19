"use client"; // This is a client component

import { get } from 'http';
import React from 'react';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button" // Fix the import statement to match the actual file name
import { Input } from "@/components/ui/input"
import { log } from 'console';

interface CounterProps {
  index: number;
}

// John Rockefeller's highest income was $340 billion
const totalMoney = 340000000000;

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

function logTotalMoney() {
  var moneySpent = 0;
  for (let key in counterDictionary) {
    var inputVal = document.getElementById(key) as HTMLInputElement;
    var x = inputVal.value;
    moneySpent += parseInt(x) * counterDictionary[key];
  }
  console.log("Total money spent: " + moneySpent.toLocaleString());
  console.log("Total money left: " + (totalMoney - moneySpent).toLocaleString());
}

const Counter: React.FC<CounterProps> = ({ index }) => {  
  const handleIncrement = (index1: number) => {
    try {
      const counterInput = document.getElementById(index1.toString()) as HTMLInputElement;
      counterInput.value = (parseInt(counterInput.value) + 1).toString();
    } catch (err) {
      console.log("womp womp");
    }
  };

  const handleDecrement = (index1: number) => {
    try {
      const counterInput = document.getElementById(index1.toString()) as HTMLInputElement;
      counterInput.value = (parseInt(counterInput.value) - 1).toString();
    } catch (err) {
      console.log('womp womp');
    }
  };

  return (
    <>
      <div className='flex justify-center my-2 w-full max-w-sm items-center space-x-2'>
        <Button className='bg-red-500 hover:bg-red-700' onClick={() => {
          handleDecrement(index)
          logTotalMoney()
          }}>
            Sell
        </Button>
        <Input onChange={() => logTotalMoney()} 
          className='w-1/6 text-center' 
          id={index.toString()} 
          type="text" 
          defaultValue={"0"} />
        <Button className='bg-green-500 hover:bg-green-700' onClick={() => {
          handleIncrement(index)
          logTotalMoney()
          }}>
            Buy
        </Button>
      </div>
    </>
  );
};

export default Counter;
