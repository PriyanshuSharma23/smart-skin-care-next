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
    <div className="h-full overflow-y-scroll">
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
          </Menu>
        </div>
        <div className="mt-2 flex gap-8">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="w-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
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
                className="relative h-40 w-full flex-col items-center justify-center rounded-xl overflow-hidden bg-gray-200"
              >
                <Image
                  
                  src={cosmetic.image}
                  alt={cosmetic.name}
                  className="object-cover"
                ></Image>
                
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
