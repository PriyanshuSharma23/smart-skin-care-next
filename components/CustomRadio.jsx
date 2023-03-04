function CustomRadio({ checked, onChange }) {
  return (
    <div
      className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 p-[2px]"
      onClick={() => onChange(!checked)}
      // add enter and space key support
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onChange(!checked);
        }
      }}
      role="radio"
      aria-checked={checked}
      tabIndex={0}
    >
      <div
        className={`absolute left-1/2 top-1/2 h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-700 transition-all
          ${checked ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
      ></div>
    </div>
  );
}

export default CustomRadio;
