export default function CustomSwitch({ checked, onChange }) {
  return (
    <div
      className={`relative h-5 w-8 rounded-full shadow-md shadow-gray-100  transition-colors ${
        checked ? "bg-black" : "bg-gray-300"
      }`}
      onClick={onChange}
      // accessible
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onChange();
        }
      }}
    >
      <div
        className={`absolute top-1/2  h-3 w-3 -translate-y-1/2 rounded-full  shadow-md transition-all ${
          checked ? "left-4 bg-white" : "left-1 bg-black"
        }`}
      ></div>
    </div>
  );
}
