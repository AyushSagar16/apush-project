"use client"; // This is a client component

import React, { useState } from "react";
import Items from "@/components/ui/items";

const totalMoney = 340000000000;

export default function Home() {
  const [moneySpent, setMoneySpent] = useState(0);

  const updateMoneySpent = (spent: number) => {
    setMoneySpent(spent);
  };

  return (
    <main className="flex flex-col items-center justify-between p-1">
      <h1 className="text-4xl font-bold m-2 justify-center content-center">{"Spend Rockefeller's Money"}</h1>
      <div className="text-3xl font-bold text-amber-500">
        <p>${(totalMoney - moneySpent).toLocaleString()}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <Items indexf={0} productName="Big Mac" price={6} image="/images/big-mac.jpg" updateMoneySpent={updateMoneySpent} />
        <Items indexf={1} productName="Gas Station" price={5500000} image="/images/gas-station.jpg" updateMoneySpent={updateMoneySpent} />
        <Items indexf={2} productName="F1 Car" price={15000000} image="/images/f1-car.webp" updateMoneySpent={updateMoneySpent} />
        <Items indexf={3} productName="Biltmore Estate" price={180000000} image="/images/biltmore.jpg" updateMoneySpent={updateMoneySpent} />
      </div>
    </main>
  );
}
