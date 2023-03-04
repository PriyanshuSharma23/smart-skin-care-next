import { Be_Vietnam_Pro } from "next/font/google";

const vietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

const accOptions = ["Text to Speech", "Zoom", "Auto-Focus", "Bold Text"];

export default function Home() {
  return (
    <div className={`flex h-full flex-col py-4 px-2`}>
      <div className="flex-col items-start leading-tight tracking-wide">
        <h1 className={`px-4 text-3xl tracking-wide ${vietnam.className}`}>
          Accessibility Settings
        </h1>
        <ul className="flex-col p-4 pt-8 text-2xl">
          {accOptions.map((item, key) => (
            <li key={key} className="mb-2 flex gap-4 border-b p-2">
              <div className="inline-flex items-center">
                <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
                  <input
                    id={`switch-${key}`}
                    type="checkbox"
                    className="bg-blue-gray-100 peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-gray-100 transition-colors duration-300 checked:bg-black peer-checked:border-black peer-checked:before:bg-black"
                  />
                  <label
                    for={`switch-${key}`}
                    className="before:content[''] border-blue-gray-100 before:bg-blue-gray-500 absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-black peer-checked:before:bg-black"
                  >
                    <div
                      className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                      data-ripple-dark="true"
                    ></div>
                  </label>
                </div>
              </div>
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
