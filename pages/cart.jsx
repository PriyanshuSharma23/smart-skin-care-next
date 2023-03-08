import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import { useCallback } from "react";
import Link from "next/link";

import { cartProducts } from "../components/products/cartProducts.jsx";
import Show from "../components/Show.jsx";
import { useCartStore } from "../stores/cart.js";

const vietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  let cart = useCartStore((state) => state.cart);
  let plusItem = useCartStore((state) => state.plusItem);
  let minusItem = useCartStore((state) => state.minusItem);

  let total = useCallback(() => {
    return cart.reduce((acc, item) => {
      return acc + +item.price.slice(1) * item.quantity;
    }, 0);
  }, [cart]);

  return (
    <div className="relative h-full flex-col items-start justify-start p-6">
      <div>
        <div className="">
          <Link href="/product-list">
            <svg
              className="my-auto h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
            <h1 className={`${vietnam.className} mt-4 text-4xl`}>My Cart</h1>
          </Link>
        </div>
        <p className="text-md text-gray-600">
          View your selected product in the cart to buy them altogether.
        </p>
      </div>
      <Show
        when={cart.length !== 0}
        fallback={
          <div className="flex h-full flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Your cart is empty</h1>
            <Image
              src="/assets/empty_cart.svg"
              width={400}
              height={400}
              className=""
              alt="empty cart"
            />
            <Link
              href="/product-list"
              className="opacity-btn mt-4 flex h-12 flex-grow-0 items-center justify-center rounded-lg bg-black px-6 py-2 text-white"
            >
              Go Back
            </Link>
          </div>
        }
      >
        <div
          className="scrollbar-hide mt-1 h-full w-full flex-col overflow-y-scroll pb-56"
          style={{ scrollbarWidth: "none" }}
        >
          {cart.map((item, key) => (
            <div key={key} className="mb-2 grid grid-cols-6 items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                className="col-span-2 h-4/5 w-full rounded-lg object-cover"
              ></Image>
              <div className="col-span-4 flex-col text-left">
                <h1 className="text-2xl font-bold">{item.name}</h1>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="py-1 text-2xl">{item.price}</p>
                <div className="mt-1 flex items-center gap-4">
                  <button
                    onClick={() => plusItem(item)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-center text-3xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-4 w-4"
                    >
                      <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
                    </svg>
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => minusItem(item)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-center text-3xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-4 w-4"
                    >
                      <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-white p-2 px-5">
          <div>
            <h1 className={`${vietnam.className} mt-4 text-3xl`}>Total</h1>
            <p className="text-md text-gray-600">$ {total()}</p>
          </div>
          <button
            disabled={cart.length === 0}
            className="opacity-btn  flex h-12 flex-grow-0 items-center justify-center rounded-lg bg-black px-6 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Order
          </button>
        </div>
      </Show>
    </div>
  );
}
