import { Be_Vietnam_Pro } from "next/font/google";
import { useState } from "react";
import CustomRadio from "../../components/CustomRadio";

const beVietnamPro = Be_Vietnam_Pro({
  weight: "500",
  subsets: ["latin"],
});

const beVietnamProReg = Be_Vietnam_Pro({
  weight: "300",
  subsets: ["latin"],
});

const skinTypes = [
  "White",
  "Asian",
  "African American",
  "American Indian or Alaskan Native",
  "Native Hawaiian or Other Pacific Islander",
];

export default function Page() {
  const [selectedSkinType, setSelectedSkinType] = useState("White");
  return (
    <div className="flex h-full flex-col p-4">
      <div className="">
        <h1 className={`text-2xl ${beVietnamPro.className}`}>
          Select Your skin Type
        </h1>
        <div className="flex flex-col gap-2 pt-8">
          {skinTypes.map((skinType) => (
            <div
              key={skinType}
              className={`flex items-center gap-2 border-b border-gray-400/30 pb-2 pt-4 text-lg ${beVietnamProReg.className}}`}
            >
              <label
                className={`flex cursor-pointer items-center gap-2  ${
                  skinType === skinType ? "text-indigo-900" : "text-gray-400/30"
                }`}
                onClick={() => setSelectedSkinType(skinType)}
              >
                {/* <input type="radio" name="skin" className="mr-2 " /> */}
                <div className="h-5 w-5">
                  <CustomRadio
                    checked={selectedSkinType === skinType}
                    onChange={() => setSelectedSkinType(skinType)}
                  />
                </div>
                {skinType}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="flex w-full gap-2 px-4">
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
