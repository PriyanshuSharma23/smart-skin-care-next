import "../styles/globals.css";
import { Be_Vietnam_Pro } from "next/font/google";

const vietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
<<<<<<< HEAD
    <div className={`h-screen bg-gray-200 ${vietnam.className} overflow-hidden`}>
      <main className="full-height relative mx-auto max-w-lg bg-white">
=======
    <div
      className={`h-screen bg-gray-200 ${vietnam.className} overflow-hidden`}
    >
      <main className="full-height relative mx-auto max-w-lg overflow-hidden bg-white">
>>>>>>> main
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
