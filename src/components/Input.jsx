export default function Input({ label, textarea, ...props }) {
  return (
    <p className="flex flex-col gap-2">
      <label htmlFor={label} className="font-semibold text-gray-800 tracking-wide">{label}</label>
      {textarea ? (
        <textarea id={label} {...props} className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" />
      ) : (
        <input id={label} {...props} className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" />
      )}
    </p>
  );
}