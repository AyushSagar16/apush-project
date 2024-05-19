"use client"; // This is a client component

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Counter from "./counter";

interface ItemsProps {
  indexf: number;
  productName: string;
  price: number;
  image: string;
  updateMoneySpent: (spent: number) => void;
}

const Items: React.FC<ItemsProps> = ({ indexf, productName, price, image, updateMoneySpent }) => {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <Card>
        <CardHeader>
          <div className="flex flex-row justify-center items-center">
            <img className="max-w-32 max-h-24 content-center" src={image} alt="product" />
          </div>
          <CardTitle className="text-center">{productName}</CardTitle>
          <CardDescription className="text-center text">${price.toLocaleString()}</CardDescription>
        </CardHeader>
        <Counter index={indexf} updateMoneySpent={updateMoneySpent} />
      </Card>
    </main>
  );
};

export default Items;
