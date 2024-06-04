"use client"; // This is a client component

import React, { useState } from "react";
import ReactDOM from 'react-dom';
// import Countdown from 'react-countdown';
import Items from "@/components/ui/items";
import Countdown from "@/components/ui/countdown";
import { Info } from "lucide-react";

const totalMoney = 340000000000;

let tooltipStrings: string[] = [
  "The exclusive rate per barrel of oil that Rockefeller proposed which was nearly half of what Vanderbilt offered to other oil companies.",
  "A staple of the American dream",
  "The book that inspired Rockefellers businessman mindset and furthered his religious mindset",
  "Rockefeller’s favorite meal",
  "Rockefeller bought a substitute to solidify his exemption from the Civil War which is an event that would ultimately result in his initial boom.",
  "Rockefeller imported eight purebred Bullmastiffs",
  "Rockefeller belonged to a humble farming family in Ohio",
  "Rockefeller bought out the Clark brothers after realizing the religious and moral misalignment they had. This would subsequently result in the formation of standard oil later on.",
  "Rockefeller’s religious passions and pursuits were strengthened by his avoidance of the Angola Horror. Additionally, he had close ties and conflicts with Vanderbilts train systems.",
  "Rockefeller owned approximately 40 different gas station companies around the U.S.",
  'Wow you’re actually reading this! If so, respect it took me a decent time to make this. https://github.com/AyushSagar16/apush-project Click on this link if you want to see the source code!',
  "The Biltmore was constructed by Vanderbilt who gave Rockefeller his first real money-generating opportunity whilst using his railroads.",
  "Rockefeller founded the Rockefeller Center to house a new home for the Metropolitan Opera.",
  "The University of Chicago was founded by John D. Rockefeller in 1892."
];

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
        <Items indexf={0} productName="Vanderbilt's rate to transport one barrel of oil" price={1.65} image="/images/oil-barrel.jpg" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[0]} />
        <Items indexf={1} productName="Big Mac" price={6} image="/images/big-mac.jpg" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[1]} />
        <Items indexf={2} productName="The Protestant Work Ethic and the Spirit of Capitalism" price={32} image="/images/capitalism-book.jpg" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[2]} />
        <Items indexf={3} productName="Oyster Dinner" price={54} image="/images/oyster-dinner.jpg" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[3]} />
        <Items indexf={4} productName="Cost of a substitute in the Civil War" price={300} image="/images/civil-war-soldier.jpg" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[4]} />
        <Items indexf={5} productName="Bullmastiff" price={2200} image="/images/bullmastiff.jpg" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[5]} />
        <Items indexf={6} productName="Acre of Farmland" price={3000} image="/images/farmland.webp" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[6]} />
        <Items indexf={7} productName="Buying out the Clarks" price={72500} image="/images/clark.jpg" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[7]} />
        <Items indexf={8} productName="Passenger train locomotives" price={5000000} image="/images/locomotives.jpg" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[8]} />
        <Items indexf={9} productName="Gas Station" price={5500000} image="/images/gas-station.jpg" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[9]} />
        <Items indexf={10} productName="F1 Car" price={15000000} image="/images/f1-car.webp" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[10]} />
        <Items indexf={11} productName="Biltmore Estate" price={180000000} image="/images/biltmore.jpg" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[11]} />
        <Items indexf={12} productName="Rockefeller Center" price={1850000000} image="/images/rockefeller-center.JPG" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[12]} />
        <Items indexf={13} productName="University of Chicago" price={11200000000} image="/images/uchicago.webp" updateMoneySpent={updateMoneySpent} tooltip={tooltipStrings[13]} />
      </div>

      <div className="m-4">
        <p>Rockefeller made a lot of money yet his employees made a measly $3 - $5 per hour. </p>
        <h1 className="text-2xl text-red-400">At this rate it would take them</h1>
        <div className="text-3xl font-bold text-red-600">
          <Countdown hours={Math.floor(totalMoney / 3 / 50 / 52)} />
        </div>
        <p className="mb-20">to make what he made in his lifetime.</p>
      </div>

      <div className="flex items-center justify-center w-full m-5">
            <img className="md:max-h-64 max-h-32" src="/images/bill.jpg" alt="Dollar Bill" />
      </div>
    </main>    
  );
}
