import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import { useLayoutEffect, useState, useRef, useEffect } from "react";

import { cartProducts } from "../components/products/cartProducts.jsx";

const vietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {

  return (
    <div className="h-full flex-col items-start justify-start p-6">
      <button className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black active:scale-95">
        <svg viewBox="0 0 256 512" fill="white" className="h-6 w-6 ">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </button>
      <div>
        <h1 className={`${vietnam.className} mt-4 text-4xl`}>My Cart</h1>
        <p className="text-md text-gray-600">
          View your selected product in the cart to buy them altogether.
        </p>
      </div>
      <div
        className="scrollbar-hide mt-1 h-1/2 w-full flex-col overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {cartProducts.map((item, key) => (
          <div key={key} className="mb-2 grid grid-cols-6 gap-4">
            <Image
              src={item.image}
              alt={item.name}
              className="col-span-3 h-full w-full rounded-lg object-cover"
            ></Image>
            <div className="col-span-3 flex-col text-left">
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <p className="text-sm text-gray-500">{item.description}</p>
              <p className="text-3xl">{item.price}</p>
              <div className="mt-1 flex items-center gap-4">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-center text-3xl">
                  +
                </button>
                1
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-center text-3xl">
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className={`${vietnam.className} mt-4 text-4xl`}>Order Now</h1>
        <p className="text-md text-gray-600">
          Total :
          
        </p>
      </div>
    </div>
  );
}
