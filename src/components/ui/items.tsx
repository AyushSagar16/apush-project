"use client"; // This is a client component

import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Counter from "./counter"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface CounterProps {
  indexf: number;
  productName: string;
  price: number;
  image: string;
}

const Items: React.FC<CounterProps> = ({ indexf, productName, price, image }) => {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <Card>
        <CardHeader>
          {/* images/big-mac.jpg */}
          <div className="flex flex-row justify-center items-center">
            <img className=" max-w-32 max-h-24 content-center" src={image} alt="product" />
          </div>
          <CardTitle className="text-center">{productName}</CardTitle>
          <CardDescription className="text-center text">
            ${price.toLocaleString()}
          </CardDescription>
        </CardHeader>
        <Counter index={indexf} />
      </Card>
    </main>
  );
}

export default Items;
