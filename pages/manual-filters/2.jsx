import { Be_Vietnam_Pro } from "next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

import CustomSwitch from "../../components/CustomSwitch";
import { useFilterStore } from "../../stores/filters";

const vietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  const filters = useFilterStore((store) => store.filters);
  const diseases = useFilterStore((store) => store.diseases);
  const setFilterDiseases = useFilterStore((store) => store.setFilterDiseases);

  const navigation = useRouter();

  const [selectedDiseases, setSelectedDiseases] = useState([
    ...filters.disease,
  ]);

  const addDisease = (disease) => {
    if (selectedDiseases.includes(disease)) {
      setSelectedDiseases(selectedDiseases.filter((item) => item !== disease));
    } else {
      setSelectedDiseases([...selectedDiseases, disease]);
    }
  };

  return (
    <div className="flex h-full flex-col py-4">
      <div className="">
        <h1 className={`px-2 text-3xl tracking-wide ${vietnam.className}`}>
          Disease
        </h1>

        <div className="px-4 pt-8">
          <h2 className={`py-2 text-lg tracking-wide ${vietnam.className}`}>
            Do You Have Any Disease?
          </h2>
          <ul className="flex-col pt-4 text-2xl">
            {diseases.map((item, key) => (
              <li
                key={key}
                className="mb-2 flex items-center gap-4 border-b p-2"
              >
                <CustomSwitch
                  checked={selectedDiseases.includes(item)}
                  onChange={() => {
                    addDisease(item);
                  }}
                />
                <p className="text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="flex w-full gap-2 px-4">
        <Link
          href="/product-list"
          className="opacity-btn flex flex-grow justify-center rounded-md border px-4 py-4 text-lg"
        >
          Skip
        </Link>
        <button
          onClick={() => {
            setFilterDiseases(selectedDiseases);

            navigation.push("/product-list");
          }}
          className="opacity-btn flex-grow rounded-md border bg-black px-4 py-4 text-lg text-white"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
