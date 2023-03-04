import "../styles/globals.css";
import { Be_Vietnam_Pro } from "next/font/google";

const vietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`h-screen bg-gray-200 ${vietnam.className}`}>
      <main className="mx-auto h-full max-w-lg bg-white">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
