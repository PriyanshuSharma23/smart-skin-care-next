import { Be_Vietnam_Pro } from "next/font/google";
import { useState } from "react";
import CustomRadio from "../../components/CustomRadio";
import CustomSwitch from "../../components/CustomSwitch";

const vietnam = Be_Vietnam_Pro({
  weight: "400",
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

const diseases = ["Parkinson", "A.L.S", "Sclerosis", "Arthritis"];

export default function Page() {
  const [selectedDiseases, setSelectedDiseases] = useState([]);

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
                {/* <div className="inline-flex items-center">
                  <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
                    <input
                      id={`switch-${key}`}
                      type="checkbox"
                      className="bg-blue-gray-100 peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-gray-100 transition-colors duration-300 checked:bg-black peer-checked:border-black peer-checked:before:bg-black"
                    />
                    <label
                      htmlFor={`switch-${key}`}
                      className="before:content[''] border-blue-gray-100 before:bg-blue-gray-500 absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-black peer-checked:before:bg-black"
                    >
                      <div
                        className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                        data-ripple-dark="true"
                      ></div>
                    </label>
                  </div>
                </div> */}
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
