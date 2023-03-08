import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Show from "../components/Show";

import { useFilterStore } from "../stores/filters";
import Link from "next/link";
import { useItemStore } from "../stores/items";
import { useCartStore } from "../stores/cart";

const vietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  const skinType = useFilterStore((state) => state.filters.skinType);
  const skinTypes = useFilterStore((state) => state.skinTypes);
  const setFilterSkinType = useFilterStore((state) => state.setFilterSkinType);

  const cart = useCartStore((state) => state.cart);
  const addItemOnce = useCartStore((store) => store.addItemOnce);
  const removeItem = useCartStore((store) => store.removeItem);
  // const isInCart = useCartStore((store) => store.isInCart);

  const items = useItemStore((state) => state.items);
  const fetchItems = useItemStore((state) => state.fetchItems);

  const [likedProduct, setLikedProduct] = useState([]);

  const handleLikeEvent = (index) => {
    if (!likedProduct.includes(index)) {
      setLikedProduct(likedProduct.concat(index));
    } else {
      setLikedProduct(likedProduct.filter((item) => item !== index));
    }
  };

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div className="h-full overflow-y-scroll">
      <div
        className="mb-2 flex h-min min-h-min items-start p-6"
        style={{ justifyContent: "space-between" }}
      >
        <div>
          <p className="mb-1 text-sm text-gray-500">Skin Type</p>
          <Menu as="div" className="relative z-30 inline-block text-left">
            <div>
              <Menu.Button className="text-md inline-flex w-full max-w-[190px] items-center justify-center gap-x-1.5 rounded-md text-left font-semibold text-gray-900 hover:bg-gray-50">
                {skinType || "Select your skin type"}
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-black"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {skinTypes.map((item, key) => (
                  <Menu.Item key={key}>
                    {({ active }) => (
                      <button
                        index={key}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-sm"
                        )}
                        onClick={() => setFilterSkinType(item)}
                      >
                        {item}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Menu>
        </div>
        <div className="mt-2 flex gap-8">
          {/* filter */}

          <Link href={"/auto-filters"}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="w-7 cursor-pointer"
            >
              <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path>
            </svg>
          </Link>
          {/* cart */}
          <Link href={"/cart"}>
            <div className="relative">
              <Show when={cart.length > 0}>
                <span
                  className="
                absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-800 p-1 text-white
                "
                >
                  {cart.length}
                </span>
              </Show>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 cursor-pointer"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* Cosmetic and DiseaseCosmetics */}
      {Object.values(items).map((product, key) => (
        <div className="mb-8 flex-col px-6 font-bold" key={key}>
          <h1 className="text-3xl">{product.name}</h1>
          <div className="mt-4 grid w-full grid-cols-2 gap-4">
            {product.cosmetics.map((cosmetic, index) => (
              <div
                key={index}
                className="h-50 relative w-full flex-col items-center justify-center overflow-hidden rounded-xl shadow-md"
                onClick={() => {
                  if (
                    cart.findIndex((item) => item.id === cosmetic.id) !== -1
                  ) {
                    removeItem(cosmetic);
                  } else {
                    addItemOnce(cosmetic);
                  }
                }}
              >
                <Image
                  src={cosmetic.image}
                  alt={cosmetic.name}
                  className="h-full w-full rounded-lg object-cover"
                ></Image>
                <button
                  className="absolute top-2 right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-400 opacity-70"
                  onClick={(e) => {
                    // stop propagation to prevent parent onClick event
                    e.stopPropagation();
                    handleLikeEvent(cosmetic.id);
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill={
                      likedProduct.includes(cosmetic.id)
                        ? "red"
                        : "currentColor"
                    }
                    width={likedProduct.includes(cosmetic.id) ? "28px" : "20px"}
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="transition-all"
                  >
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
                  </svg>
                </button>
                <div
                  className="absolute top-2 left-2 z-20 flex h-min w-min items-center justify-center rounded-xl p-2 text-white shadow-lg"
                  style={{ background: "#84bdce" }}
                >
                  {cosmetic.price}
                </div>
                <div className="absolute bottom-0 flex h-1/5 w-full items-center justify-center text-white ">
                  <button className="absolute h-full w-full bg-black opacity-50 "></button>
                  <p className="pointer-events-none relative z-10">
                    {cosmetic.name}
                  </p>
                </div>

                <Show
                  when={
                    cart.findIndex((item) => item.id === cosmetic.id) !== -1
                  }
                >
                  <div className="absolute inset-0  flex items-center justify-between bg-cyan-400/70">
                    <p
                      className={`
                      mx-auto text-2xl text-white
                    `}
                    >
                      Added
                    </p>
                  </div>
                </Show>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
