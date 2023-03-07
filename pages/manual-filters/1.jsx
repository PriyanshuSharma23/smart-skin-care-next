import { Be_Vietnam_Pro } from "next/font/google";
import { useState } from "react";
import CustomRadio from "../../components/CustomRadio";
import { useFilterStore } from "../../stores/filters";
import { useRouter } from "next/router";
import Link from "next/link";

const vietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

const beVietnamProReg = Be_Vietnam_Pro({
  weight: "300",
  subsets: ["latin"],
});

export default function Page() {
  const skinType = useFilterStore((state) => state.filters.skinType);
  const skinTypes = useFilterStore((state) => state.skinTypes);

  const setFilterSkinType = useFilterStore((state) => state.setFilterSkinType);

  const navigation = useRouter();

  const [selectedSkinType, setSelectedSkinType] = useState(skinType);
  return (
    <div className="flex h-full flex-col p-4">
      <div className="">
        <h1 className={` text-3xl tracking-wide ${vietnam.className}`}>
          Select Your skin Type
        </h1>
        <div className="flex flex-col gap-2 pt-8">
          {skinTypes.map((skinType) => (
            <div
              key={skinType}
              className={`flex items-center gap-2 border-b border-gray-400/30 pb-2 pt-4 text-lg ${beVietnamProReg.className}}`}
            >
              <label
                className={`flex cursor-pointer items-center gap-2 text-lg ${
                  selectedSkinType === skinType ? "text-black" : "text-gray-500"
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
        <Link
          href="/manual-filters/2"
          className="opacity-btn flex flex-grow justify-center rounded-md border px-4 py-4 text-lg"
        >
          Skip
        </Link>
        <button
          onClick={() => {
            setFilterSkinType(selectedSkinType);
            navigation.push("/manual-filters/2");
          }}
          className="opacity-btn flex-grow rounded-md border bg-black px-4 py-4 text-lg text-white"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
