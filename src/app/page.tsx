"use client"; // This is a client component

import Image from "next/image";
import Items from "@/components/ui/items"
import Counter  from "@/components/ui/counter";
import React, { useEffect, useState } from 'react';

// function getInputValue() {
//   var inputVal = document.getElementById("1") as HTMLInputElement;
//   var x = inputVal.value;
//   console.log(x);
// }

export default function Home() {
  const [count, setCount] = useState(0);
  // const x = document.getElementById("1") as HTMLInputElement;

  // useEffect(() => {
  //   getInputValue();
  // });

  
  
  
  return (
    <main className="flex flex-col items-center justify-between p-1">
      <h1 className="text-4xl font-bold m-2">Spend John Rockefeller's Money</h1>
      <div>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        <Items indexf={0} productName="Big Mac" price={6} image="images/big-mac.jpg" />
        <Items indexf={1} productName="Gas Station" price={5500000} image="images/gas-station.jpg" />
        <Items indexf={2} productName="F1 Car" price={15000000} image="images/f1-car.webp" />
        <Items indexf={3} productName="Biltmore Estate" price={180000000} image="images/biltmore.jpg" />
      </div>
    </main>
  );
}
