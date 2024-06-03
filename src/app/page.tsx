"use client"; // This is a client component

import React, { useState } from "react";
import ReactDOM from 'react-dom';
// import Countdown from 'react-countdown';
import Items from "@/components/ui/items";
import Countdown from "@/components/ui/countdown";

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
        <Items indexf={0} productName="Vanderbilt's rate to transport one barrel of oil" price={1.65} image="/images/oil-barrel.jpg" updateMoneySpent={updateMoneySpent} />
        <Items indexf={1} productName="Big Mac" price={6} image="/images/big-mac.jpg" updateMoneySpent={updateMoneySpent} />
        <Items indexf={2} productName="The Protestant Work Ethic and the Spirit of Capitalism" price={32} image="/images/capitalism-book.jpg" updateMoneySpent={updateMoneySpent} />
        <Items indexf={3} productName="Oyster Dinner" price={54} image="/images/oyster-dinner.jpg" updateMoneySpent={updateMoneySpent} />
        <Items indexf={4} productName="Cost of a substitute in the Civil War" price={300} image="/images/civil-war-soldier.jpg" updateMoneySpent={updateMoneySpent} />
        <Items indexf={5} productName="Bullmastiff" price={2200} image="/images/bullmastiff.jpg" updateMoneySpent={updateMoneySpent} />
        <Items indexf={6} productName="Acre of Farmland" price={3000} image="/images/farmland.webp" updateMoneySpent={updateMoneySpent} />
        <Items indexf={7} productName="Buying out the Clarks" price={72500} image="/images/clark.jpg" updateMoneySpent={updateMoneySpent} />
        <Items indexf={8} productName="Passenger train locomotives" price={5000000} image="/images/locomotives.jpg" updateMoneySpent={updateMoneySpent} />
        <Items indexf={9} productName="Gas Station" price={5500000} image="/images/gas-station.jpg" updateMoneySpent={updateMoneySpent} />
        <Items indexf={10} productName="F1 Car" price={15000000} image="/images/f1-car.webp" updateMoneySpent={updateMoneySpent} />
        <Items indexf={11} productName="Biltmore Estate" price={180000000} image="/images/biltmore.jpg" updateMoneySpent={updateMoneySpent} />
        <Items indexf={12} productName="Rockefeller Center" price={1850000000} image="/images/rockefeller-center.jpg" updateMoneySpent={updateMoneySpent} />
        <Items indexf={13} productName="University of Chicago" price={11200000000} image="/images/uchicago.webp" updateMoneySpent={updateMoneySpent} />
      </div>
      <div className="m-4">
        <p>Rockefeller made a lot of money yet his employees made a measly $3 - $5 per hour. </p>
        <h1 className="text-2xl text-teal-400">At this rate it would take them</h1>
        <div className="text-3xl font-bold text-violet-600">
          <Countdown hours={Math.floor(totalMoney / 3 / 50 / 52)} />
        </div>
        <p className="mb-20">to make what he made in his lifetime.</p>
      </div>
    </main>    
  );
}
