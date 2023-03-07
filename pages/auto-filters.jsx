import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import { useLayoutEffect, useState, useRef, useEffect } from "react";
import skinTones from "../public/assets/skinTones.jpg";
import { gsap } from "gsap";
import Webcam from "react-webcam";
import Show from "../components/Show";
import Link from "next/link";

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
  const [isCameraShown, setIsCameraShown] = useState(false);
  const [cameraView, setCameraView] = useState("user");
  const [imageSrc, setImageSrc] = useState(null);
  const [dragging, setDragging] = useState(false);

  const [result, setResult] = useState(null);

  const [finalImage, setFinalImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  const handleClick = (event) => {
    setIsShown((_) => true);
  };

  const handleUpload = () => {
    if (!finalImage) return;

    setLoading(true);

    // create delay
    timerRef.current = setTimeout(() => {
      setLoading(false);
      setResult({
        disease: "Parkinson",
        skinType: "White",
      });
    }, 2000);
  };

  const popUpRef = useRef(null);
  const heroRef = useRef(null);
  const cameraBoxRef = useRef(null);
  const cameraRef = useRef(null);
  const dropzoneRef = useRef(null);

  useEffect(() => {}, []);

  useEffect(() => {
    // add outside click
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setIsShown(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);

      // clear timer
      clearTimeout(timerRef.current);
    };
  }, []);

  useLayoutEffect(() => {
    if (isShown) {
      gsap.to(popUpRef.current, {
        duration: 0.5,
        y: "0%",
        ease: "power4.out",
      });
    } else {
      gsap.to(popUpRef.current, {
        duration: 0.5,
        y: "100%",
        ease: "power4.out",
      });
    }
  }, [isShown]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isCameraShown) {
        gsap.to(heroRef.current, {
          duration: 0.5,
          y: "-100%",
          height: "0rem",
          ease: "power4.out",
        });
      } else {
        gsap.to(heroRef.current, {
          duration: 0.5,
          height: "10rem",
          y: "0%",
          ease: "power4.out",
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, [isCameraShown]);

  useEffect(() => {
    if (isCameraShown === false) {
      setImageSrc(null);
    }
  }, [isCameraShown]);

  return (
    <>
      <div
        className="relative flex h-full flex-col"
        ref={dropzoneRef}
        onDragEnter={(e) => {
          e.preventDefault();
          e.stopPropagation();

          if (!dragging) {
            setDragging(true);
          }
        }}
      >
        <div className="flex-col items-start leading-tight tracking-wide">
          <div
            ref={heroRef}
            className={`${vietnam.className} relative top-0 left-0 flex h-40 w-full items-center justify-center bg-black p-4`}
          >
            <Image
              src={skinTones}
              style={{ objectFit: "cover", opacity: 0.7 }}
              fill="cover"
              alt="skinTones"
            />
            <h1 className="absolute z-10 text-5xl text-white drop-shadow-lg">
              Auto Filter
            </h1>
          </div>
          <div className="relative flex-col justify-start py-4 px-6">
            <h2 className="mb-4 text-2xl">Upload Image</h2>
            <div
              ref={cameraBoxRef}
              className={`relative w-full rounded-md bg-gray-100  text-center outline-dashed outline-gray-300 transition-all ${
                isCameraShown ? "h-96" : "h-60"
              }`}
            >
              <Show
                when={result === null}
                fallback={
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg
                      className="checkmark addClass h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 52 52"
                    >
                      <circle
                        className="checkmark__circle addClass"
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                      />
                      <path
                        className="checkmark__check addClass"
                        fill="none"
                        d="M14.1 27.2l7.1 7.2 16.7-16.8"
                      />
                    </svg>
                  </div>
                }
              >
                <>
                  {/* When Camera Shown */}
                  <Show when={isCameraShown} fallback={null}>
                    {/* When Image not clicked */}
                    <Show when={!imageSrc} fallback={null}>
                      <Webcam
                        imageSmoothing={true}
                        className="h-full w-full rounded-md object-cover"
                        ref={cameraRef}
                        audio={false}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{
                          facingMode: cameraView,
                        }}
                      />
                    </Show>

                    {/* When Image clicked */}
                    <Show when={imageSrc} fallback={null}>
                      <Image
                        src={imageSrc}
                        fill="cover"
                        alt="pic"
                        className="h-full w-full rounded-md object-cover"
                      />
                    </Show>
                  </Show>

                  {/* When Camera Not Shown */}
                  <Show when={!isCameraShown} fallback={null}>
                    <Show
                      when={!loading}
                      fallback={<Loading finalImage={finalImage} />}
                    >
                      <Show
                        when={finalImage}
                        fallback={
                          <ImageSelectionPrompt handleClick={handleClick} />
                        }
                      >
                        <FinalConfirmation
                          finalImage={finalImage}
                          handleUpload={handleUpload}
                          setFinalImage={setFinalImage}
                        />
                      </Show>
                    </Show>
                  </Show>
                </>
              </Show>
            </div>
          </div>
          <div className={`relative flex-col justify-start py-4 px-6`}>
            <Show
              when={isCameraShown}
              fallback={
                <Show
                  when={result == null}
                  fallback={
                    <>
                      <h2 className="mb-4 text-2xl">Detected</h2>
                      <ul>
                        <li className="text-lg">
                          Skin Type:{" "}
                          <span className="ml-2 font-bold text-neutral-600">
                            {result?.skinType}
                          </span>
                          <Link
                            className="ml-2 text-sm text-blue-500"
                            href="/manual-filters/1"
                          >
                            Change
                          </Link>
                        </li>
                        <li className="text-lg">
                          Disease:
                          <span className="ml-2 font-bold text-red-500">
                            {result?.disease}
                          </span>
                          <Link
                            className="ml-2 text-sm text-blue-500"
                            href="/manual-filters/2"
                          >
                            Change
                          </Link>
                        </li>
                      </ul>
                    </>
                  }
                >
                  <>
                    <h2 className="mb-4 text-2xl">Description</h2>
                    <p className="text-1xl">
                      Detects any problems, race with one photo of yours
                    </p>
                  </>
                </Show>
              }
            >
              <div className="flex w-full items-center justify-around gap-2">
                <button
                  className="opacity-btn"
                  onClick={() => {
                    setIsCameraShown(false);
                  }}
                >
                  <svg
                    className="h-10 w-10 cursor-pointer rounded-full fill-red-500 text-red-500"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 15 15"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>

                {/* Shutter */}
                <Show
                  when={imageSrc}
                  fallback={
                    <button
                      className="opacity-btn h-12 w-12 rounded-full border-4 border-black text-white"
                      onClick={() => {
                        const imageSrc = cameraRef.current.getScreenshot();
                        setImageSrc(imageSrc);
                      }}
                    ></button>
                  }
                >
                  {/* upload button */}
                  <button
                    onClick={() => {
                      setFinalImage(imageSrc);
                      setIsCameraShown(false);
                    }}
                    className="opacity-btn"
                  >
                    <svg
                      className=" h-12 w-12"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"></path>
                      <path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"></path>
                    </svg>
                  </button>
                </Show>

                <Show
                  when={imageSrc}
                  fallback={
                    // rotate camera
                    <button
                      className="h-10 w-10 cursor-pointer rounded-full text-black/70"
                      onClick={() => {
                        setCameraView(
                          cameraView === "user" ? "environment" : "user"
                        );
                      }}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.52,3.43A9.09,9.09,0,0,0,5.7,5.55V2.35H4.07v6.5h6.5V7.21H6.3a7.46,7.46,0,1,1-1.47,8.65l-1.46.73A9.11,9.11,0,1,0,11.52,3.43Z"></path>
                      </svg>
                    </button>
                  }
                >
                  {/* delete current photo */}
                  <button
                    className="h-10 w-10 cursor-pointer rounded-full text-black/70"
                    onClick={() => {
                      setImageSrc(null);
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                    </svg>
                  </button>
                </Show>
              </div>
            </Show>
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

        <div
          ref={popUpRef}
          className="fixed bottom-0 left-1/2 z-50 h-80 w-full max-w-md -translate-x-1/2 flex-col items-center justify-center rounded-lg bg-white p-8 text-center shadow-2xl"
        >
          <p className="mb-4 text-lg">Choose files for upload</p>
          <button
            onClick={() => {
              setIsCameraShown(true);
              setIsShown(false);
            }}
            className="mb-6 flex h-1/3 w-full items-center justify-center gap-4 rounded-lg bg-gray-200 text-lg outline-dashed outline-gray-300"
          >
            <svg viewBox="0 0 512 512" width="40px">
              <path d="M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z" />
            </svg>
            <p>Camera</p>
          </button>
          <label
            htmlFor="file-input"
            className="flex h-1/3 w-full items-center justify-center gap-4 rounded-lg bg-gray-200 text-lg outline-dashed outline-gray-300"
          >
            <svg viewBox="0 0 512 512" width="40px">
              <path d="M448 480H64c-35.3 0-64-28.7-64-64V192H512V416c0 35.3-28.7 64-64 64zm64-320H0V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64z" />
            </svg>
            <p>Storage</p>
            {/* hidden file input element */}
            <input
              id="file-input"
              type="file"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    // check if file is image
                    if (file.type.split("/")[0] !== "image") {
                      alert("Please select an image file");
                      return;
                    }
                    setFinalImage(e.target.result);
                    setIsShown(false);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </label>
        </div>
      </div>

      <Show when={dragging}>
        <div
          className="
          fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-white/50
            backdrop-blur-md
          "
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setDragging(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setDragging(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();

            console.log(e.dataTransfer.files);

            const files = e.dataTransfer.files;
            if (files.length > 0) {
              const file = files[0];
              console.log(file);
              if (!file.type.startsWith("image/")) {
                return;
              }
              const reader = new FileReader();
              reader.onload = (e) => {
                setFinalImage(e.target.result);
              };
              reader.readAsDataURL(file);
            }

            setDragging(false);
          }}
        >
          <h1
            className="
            text-2xl
            "
          >
            Drop Images to upload
          </h1>
        </div>
      </Show>
    </>
  );
}

function ImageSelectionPrompt({ handleClick }) {
  return (
    <div className="p-12">
      <p className="mb-4 text-2xl">Drop files to upload</p>
      <p className="text-1xl mb-4">or</p>
      <button
        className="opacity-btn flex-grow rounded-md border bg-black px-3 py-2 text-lg text-white"
        onClick={handleClick}
      >
        Select Files
      </button>
    </div>
  );
}

function FinalConfirmation({ finalImage, setFinalImage, handleUpload }) {
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
