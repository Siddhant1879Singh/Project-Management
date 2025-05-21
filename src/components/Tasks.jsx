import { useRef } from "react";
import uuid from "react-uuid";
export default function Tasks({ value, onChange }) {
  const inp = useRef();

  function removeTask(key) {
    const updated = value.filter((ele) => ele.key !== key);
    onChange(updated);
  }

  function addTask() {
    const taskValue = inp.current.value.trim();
    if (!taskValue) return;

    const newElement = { key: uuid(), task: taskValue };
    onChange([newElement, ...value]);
    inp.current.value = "";
  }

  return (
    <div className="space-y-2">
      <label htmlFor="input" className="font-medium text-gray-800">
        Add Tasks
      </label>
      <div className="flex gap-2">
        <input
          ref={inp}
          id="input"
          className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all"
        >
          Add Task
        </button>
      </div>
      <ul className="list-disc pl-6 space-y-1">
        {value.length === 0 ? (
          <p>There are no tasks in the projects</p>
        ) : (
          value.map((task) => (
            <li
              key={task.key}
              className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100"
            >
              <span>{task.task}</span>
              <button
                onClick={() => removeTask(task.key)}
                className="font-medium text-xs bg-red-800 text-white px-2 py-1 rounded hover:bg-red-900"
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}