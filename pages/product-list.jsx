import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import { useLayoutEffect, useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { cosmetics } from "../components/products/cosmetics.jsx";
import { diseaseCosmetics } from "../components/products/diseaseCosmetics.jsx";

const vietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

const skinTypes = [
  "White",
  "Asian",
  "African American",
  "American Indian or Alaskan Native",
  "Native Hawaiian or Other Pacific Islander",
];

// ,
//
//   "Concealer",

const ProductTypes = [
  {
    name: "Cosmetic Recommendation",
    cosmetics: cosmetics,
  },
  {
    name: `Disease Recommendation`,
    cosmetics: diseaseCosmetics,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div
        className="mb-2 flex h-min min-h-min items-start p-6"
        style={{ justifyContent: "space-between" }}
      >
        <div>
          <p className="mb-1 text-gray-500">Skin Type</p>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Options
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {skinTypes.map((item, key) => (
                    <Menu.Item key={key}>
                      {({ active }) => (
                        <a
                          href="#"
                          id={key}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {item}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="mt-2 flex gap-8">
          <svg viewBox="0 0 512 512" width="25px">
            <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
          </svg>
          <svg viewBox="0 0 576 512" width="25px">
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </div>
      </div>

      {ProductTypes.map((product, key) => (
        <div className="mb-8 flex-col px-6 font-bold" key={key}>
          <h1 className="text-3xl">{product.name}</h1>
          <div className="mt-4 grid w-full grid-cols-2 gap-2">
            {product.cosmetics.map((cosmetic, index) => (
              <div
                key={index}
                className="relative flex-col h-40 w-full items-center justify-center rounded-xl bg-gray-200"
              >
                <Image
                    
                  style={{ objectFit: "cover" }}
                  src={cosmetic.image}
                  alt={cosmetic.name}
                ></Image>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
