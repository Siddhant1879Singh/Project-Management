export default function Header({ handleClick }) {
  return (
    <div className="text-center space-y-4">
      <img
        src="logo.png"
        alt="Logo"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h3 className="text-2xl font-bold text-gray-800">No Project Selected</h3>
      <p className="text-gray-600 text-md">
        Create a new project or select an existing one
      </p>
      <button
        onClick={handleClick}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg"
      >
        Create Project
      </button>
    </div>
  );
}
