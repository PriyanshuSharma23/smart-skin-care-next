import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`text-xl font-extrabold text-black ${marcellus.className}`}>
      <h1>
        Test <br />
        Test <br />
        <span>Companies</span>
      </h1>
    </div>
  );
}
