"use client"; // This is a client component

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

import Counter from "./counter";
import { Info } from "lucide-react";

interface ItemsProps {
  indexf: number;
  productName: string;
  price: number;
  image: string;
  updateMoneySpent: (spent: number) => void;
  tooltip: string;
}

const Items: React.FC<ItemsProps> = ({ indexf, productName, price, image, updateMoneySpent, tooltip }) => {
  return (
    <main className="flex flex-col items-center justify-between p-10 max-w-md">
      <Card>
        <CardHeader>
          <div className="ml-auto">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant={"ghost"}>
                    <Info size={24} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className=" max-w-64">{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider> 
          </div>
          <div className="flex flex-row justify-center items-center">
            <img className="w-auto h-auto max-w-32 max-h-24 content-center" src={image} alt="product" />
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
