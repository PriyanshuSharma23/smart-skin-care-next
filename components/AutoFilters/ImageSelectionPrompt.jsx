export function ImageSelectionPrompt({ handleClick }) {
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
