import Image from "next/image";

export function FinalConfirmation({ finalImage, setFinalImage, handleUpload }) {
  return (
    <div className="relative h-full w-full ">
      <Image
        src={finalImage}
        fill="cover"
        alt="pic"
        className="fixed top-0 left-0 z-10 h-full w-full rounded-md object-cover "
      />
      <div className="absolute top-0 left-0 z-20 h-full w-full rounded-md bg-black bg-opacity-50"></div>

      <div className="absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 gap-2 pb-2">
        <button
          className="opacity-btn rounded-md border bg-black px-3 py-2 text-lg text-white"
          onClick={() => {
            setFinalImage(null);
          }}
        >
          Clear
        </button>

        <button
          className="opacity-btn rounded-md border bg-black px-3 py-2 text-lg text-white"
          onClick={() => {
            handleUpload();
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
