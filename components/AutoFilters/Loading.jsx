import Image from "next/image";

function Loading({ finalImage }) {
  return (
    <div className="absolute top-0 left-0 z-20 h-full w-full rounded-md">
      <Image
        src={finalImage}
        fill="cover"
        alt="pic"
        className="fixed top-0 left-0 z-10 h-full w-full rounded-md object-cover "
      />
      <div className="absolute top-0 left-0 z-20 h-full w-full rounded-md bg-black bg-opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 gap-2">
        <div className="flex items-center justify-center">
          <div
            className="inline-block  h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Loading };
