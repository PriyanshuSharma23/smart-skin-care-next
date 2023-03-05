import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import skinTones from "../public/assets/skinTones.jpg";

const vietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

const beVietnamProReg = Be_Vietnam_Pro({
  weight: "300",
  subsets: ["latin"],
});

export default function Page() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-col items-start leading-tight tracking-wide">
        <div
          className={`${vietnam.className} relative top-0 left-0 flex h-40 w-full items-center justify-center p-4 bg-black`}
        >
          <Image
            src={skinTones}
            fill="cover"
            style={{
              objectFit: "cover",
              opacity: 0.8,
            }}
            alt="skinTones"
          />
          <h1 className="absolute z-10 text-5xl text-white drop-shadow-lg">
            Auto Filter
          </h1>
        </div>
        <div className="relative flex-col justify-start py-4 px-6">
          <h2 className="mb-4 text-2xl">Upload Image</h2>
          <div className="h-60 w-full rounded-md bg-gray-100 p-12 text-center outline-dashed outline-gray-300">
            <p className="mb-4 text-2xl">Drop files to upload</p>
            <p className="text-1xl mb-4">or</p>
            <button
              className="opacity-btn flex-grow rounded-md border bg-black px-3 py-2 text-lg text-white"
              onClick={handleClick}
            >
              Select Files
            </button>
            {isShown && (
              <div className="absolute top-64 right-24 z-20 h-80 w-80 flex-col items-center justify-center rounded-lg bg-white p-8 text-center shadow-2xl">
                <p className="mb-4 text-lg">Choose files for upload</p>
                <button className="mb-6 flex h-1/3 w-full items-center justify-center gap-4 rounded-lg bg-gray-200 text-lg outline-dashed outline-gray-300">
                  <svg viewBox="0 0 512 512" width="40px">
                    <path d="M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z" />
                  </svg>
                  <p>Camera</p>
                </button>
                <button className="flex h-1/3 w-full items-center justify-center gap-4 rounded-lg bg-gray-200 text-lg outline-dashed outline-gray-300">
                  <svg viewBox="0 0 512 512" width="40px">
                    <path d="M448 480H64c-35.3 0-64-28.7-64-64V192H512V416c0 35.3-28.7 64-64 64zm64-320H0V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64z" />
                  </svg>
                  <p>Storage</p>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="relative flex-col justify-start py-4 px-6">
          <h2 className="mb-4 text-2xl">Description</h2>
          <p className="text-1xl">
            Detects any problems, race with one photo of yours
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 mt-8 flex w-full gap-2 px-6">
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
