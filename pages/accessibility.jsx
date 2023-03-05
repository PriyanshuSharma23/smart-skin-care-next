import { Be_Vietnam_Pro } from "next/font/google";
import CustomSwitch from "../components/CustomSwitch";
import { useState } from "react";

const vietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

const accOptions = ["Text to Speech", "Zoom", "Auto-Focus", "Bold Text"];

export default function Home() {
  const [selectedAccOption, setSelectedAccOption] = useState([]);

  const toggleOption = (option) => {
    if (selectedAccOption.includes(option)) {
      setSelectedAccOption(selectedAccOption.filter((item) => item !== option));
    } else {
      setSelectedAccOption([...selectedAccOption, option]);
    }
  };

  return (
    <div className={`flex h-full flex-col py-4 px-2`}>
      <div className="flex-col items-start leading-tight tracking-wide">
        <h1 className={`px-4 text-3xl tracking-wide ${vietnam.className}`}>
          Accessibility Settings
        </h1>
        <ul className="flex-col p-4 pt-8 text-2xl">
          {accOptions.map((item, key) => (
            <li key={key} className="mb-2 flex gap-4 border-b p-2">
              <CustomSwitch
                checked={selectedAccOption.includes(item)}
                onChange={() => toggleOption(item)}
              />
              <p className="text-lg">{item}</p>
            </li>
          ))}
        </ul>
        <div className="px-4">
          <div className="flex-col rounded-md border p-4">
            <p className="mb-2 text-lg">Select Text Size</p>
            <div className="flex gap-2 space-x-2 text-center">
              <button className=" flex w-full items-center justify-center border px-10 py-6">
                A
              </button>
              <button className=" flex w-full items-center justify-center border px-10 py-6 text-2xl">
                A
              </button>
              <button className=" flex w-full items-center justify-center border px-10 py-6 text-4xl">
                A
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="mt-8 flex w-full gap-2 px-6">
        <button className="opacity-btn flex-grow rounded-md border px-4 py-4 text-lg">
          Skip
        </button>
        <button className="opacity-btn flex-grow rounded-md border bg-black px-4 py-4 text-lg text-white">
          Apply
        </button>
      </div>
    </div>
  );
}
