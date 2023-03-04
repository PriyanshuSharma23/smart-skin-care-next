import { Marcellus } from "next/font/google";
import Image from "next/image";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`flex h-full flex-col gap-2 py-2`}>
      <div className=" flex items-center leading-tight tracking-wide">
        <h1
          className={`mx-auto text-5xl tracking-wide text-indigo-900 ${marcellus.className}`}
        >
          <p>Test</p>
          <p>Test</p>
          <p className="ml-2 text-3xl tracking-widest">Companies</p>
        </h1>
      </div>
      {/* Image Container */}
      <div className="relative flex flex-grow flex-row p-4">
        <div className="relative flex flex-grow flex-col rounded-l-lg p-4">
          <Image
            src="https://picsum.photos/200/400"
            fill="contain"
            alt="image 1"
            className="rounded-l-lg"
          />
        </div>
        <div className="relative flex flex-grow flex-col p-4">
          <Image
            src="https://picsum.photos/400/600"
            fill="contain"
            alt="image 2"
          />
        </div>
        <div className="relative flex flex-grow flex-col rounded-r-lg p-4">
          <Image
            src="https://picsum.photos/600/800"
            fill="contain"
            alt="image 3"
            className="rounded-r-lg"
          />
        </div>
      </div>

      {/* Log in */}
      <div className="flex-grow bg-gray-50 p-4">
        <p>Login with your Phone Number</p>
      </div>
    </div>
  );
}
