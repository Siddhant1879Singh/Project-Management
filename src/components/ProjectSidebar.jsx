export default function Sidebar({ handleClick, showProject, ProjectList }) {
  return (
    <div className="w-72 bg-gradient-to-b from-gray-100 to-gray-200 p-6 shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Your Projects</h2>
      <button
        onClick={handleClick}
        className="w-full mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        + Add Project
      </button>
      <menu className="space-y-2">
        {ProjectList.map((ele) => (
          <button
            key={ele.key}
            onClick={() => showProject(ele.key)}
            className="block w-full text-left px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50 transition"
          >
            {ele.title}
          </button>
        ))}
      </menu>
    </div>
  );
}
