import { Marcellus, Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import countryCodes from "../public/country-codes.json";
import { useRouter } from "next/router";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const navigation = useRouter();

  return (
    <div className={`flex h-full flex-col gap-2 overflow-scroll pt-2`}>
      <div className="mt-auto"></div>
      <div className=" flex items-center leading-tight tracking-wide">
        <h1
          className={`mx-auto text-5xl tracking-wide text-indigo-900 ${marcellus.className}`}
        >
          <p>Test</p>
          <p>Test</p>
          <p className="ml-2 text-3xl tracking-widest">Companies</p>
        </h1>
      </div>

      <div className="mt-auto"></div>

      {/* Image Container */}
      <div
        className="relative flex max-h-[350px]  min-h-[150px] flex-row px-4 sm:min-h-[250px]"
        style={{
          flexGrow: 1,
        }}
      >
        <div className="relative flex flex-grow flex-col rounded-l-lg p-4">
          <Image
            src="https://picsum.photos/200/400"
            fill="cover"
            alt="image 1"
            className="rounded-l-lg object-cover"
          />
        </div>
        <div className="relative flex flex-grow flex-col p-4">
          <Image
            src="https://picsum.photos/300/600"
            fill="cover"
            alt="image 2"
            className="object-cover"
          />
        </div>
        <div className="relative flex flex-grow flex-col rounded-r-lg p-4">
          <Image
            src="https://picsum.photos/400/800"
            fill="cover"
            alt="image 3"
            className="rounded-r-lg object-cover"
          />
        </div>
      </div>

      <div className="mt-auto"></div>

      {/* Log in */}
      <div className="flex max-h-[300px] flex-grow flex-col justify-between bg-gray-50 p-4 text-lg shadow">
        <div>
          <p className="text-xl">Login with your Phone Number</p>
          <div className="flex flex-row gap-2 py-1 text-neutral-700">
            <select
              name=""
              id=""
              className="rounded-md border px-1 py-3 text-lg "
            >
              {/* <option value="">+91</option>
              <option value="">+92</option>
              <option value="">+93</option> */}
              {countryCodes.map((countryCode, i) => (
                <option key={i} value={countryCode.dial_code}>
                  {countryCode.dial_code}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="7223674873"
              className="flex-grow rounded-md border px-3 py-3 text-lg"
            />
          </div>
          <button
            className={`opacity-btn bg-black px-4 py-2 font-light text-white ${beVietnamPro.className} mt-2 rounded-md`}
            onClick={() => navigation.push("/auto-filters")}
          >
            Send OTP
          </button>
        </div>

        <div className="relative my-4 bg-gray-500/30" style={{ height: 1 }}>
          <div className="absolute left-1/2 -translate-x-1/2  -translate-y-1/2">
            <p className="bg-gray-50 px-2 text-gray-500">Or Login with</p>
          </div>
        </div>

        {/* div of logos */}
        <div className="flex flex-row items-center justify-center gap-2">
          <button className="opacity-btn aspect-square border p-2">
            <Image
              src="/assets/apple.svg"
              height={25}
              width={25}
              alt="apple icon"
              className="aspect-square"
            ></Image>
          </button>
          <button className="opacity-btn aspect-square border p-2">
            <Image
              src="/assets/facebook.svg"
              height={25}
              width={25}
              alt="facebook icon"
              className="aspect-square"
            ></Image>
          </button>
          <button className=" opacity-btn aspect-square border p-2">
            <Image
              src="/assets/google.svg"
              height={25}
              width={25}
              alt="google icon"
              className="aspect-square"
            ></Image>
          </button>
          <button className="opacity-btn aspect-square border p-2">
            <Image
              src="/assets/twitter.svg"
              height={25}
              width={25}
              alt="twitter icon"
              className="aspect-square"
            ></Image>
          </button>
        </div>
      </div>
    </div>
  );
}
