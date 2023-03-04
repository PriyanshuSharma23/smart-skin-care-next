import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`py-2`}>
      <div className=" flex items-center leading-tight tracking-wide">
        <h1
          className={`text-5xl tracking-wide text-indigo-900 ${marcellus.className} mx-auto`}
        >
          <p>Test</p>
          <p>Test</p>
          <p className="ml-2 text-3xl tracking-widest">Companies</p>
        </h1>
      </div>
    </div>
  );
}
