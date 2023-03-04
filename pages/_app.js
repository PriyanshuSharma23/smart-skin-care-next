import "../styles/globals.css";
import { Be_Vietnam_Pro } from "next/font/google";

const vietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`bg-gray-100 h-screen ${vietnam.className}`}>
      <main className="max-w-lg mx-auto bg-white h-full">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
