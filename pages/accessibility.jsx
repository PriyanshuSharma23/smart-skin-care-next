import { Be_Vietnam_Pro } from "next/font/google";

const veitnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

const accOptions = ["Text to Speech", "Zoom", "Auto-Focus", "Bold Text"];

export default function Home() {
  return (
    <div className={`py-2`}>
      <div className="flex-col items-start leading-tight tracking-wide">
        <h1 className={`text-5xl tracking-wide ${veitnam.className}`}>
          Accessibility Settings
        </h1>
        <ul className="flex-col p-4 text-2xl">
          {accOptions.map((item, key) => (
            <li key={key} className="mb-2 flex gap-4 border-b-2 p-2">
              <div className="inline-flex items-center">
                <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
                  <input
                    id={`switch-${key}`}
                    type="checkbox"
                    className="bg-blue-gray-100 peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full transition-colors duration-300 checked:bg-pink-500 peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
                  />
                  <label
                    for={`switch-${key}`}
                    className="before:content[''] border-blue-gray-100 before:bg-blue-gray-500 absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
                  >
                    <div
                      className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                      data-ripple-dark="true"
                    ></div>
                  </label>
                </div>
              </div>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <div className="flex-col rounded-md border-2 p-4">
          <p className="text-lg">Select Text Size</p>
          <div className="flex gap-2 space-x-2 text-center">
            <div className=" w-full border-2 p-10">A</div>
            <div className=" w-full border-2 p-10 text-2xl">A</div>
            <div className=" w-full border-2 p-10 text-4xl">A</div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex w-full gap-2 px-4">
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
