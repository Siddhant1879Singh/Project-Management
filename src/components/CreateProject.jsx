//Create Project Component
import Input from "./Input"
import Tasks from "./Tasks";
import { useState } from "react";
import uuid from "react-uuid";

export default function CreateProject({
  onCancel,
  addProject,
  updateProject,
  project,
  onDelete,
}) {
  const [title, setTitle] = useState(() => project?.title ?? "");
  const [description, setDescription] = useState(
    () => project?.description ?? ""
  );
  const [tasks, setTasks] = useState(() => project?.tasks ?? []);

  function checkValidInput() {
    return (
      title.trim() === "" || description.trim() === ""
    );
  }

  function handleSave() {
    console.log("🟢 Saving...", { title, description, tasks }); // ADD THIS
    const newProject = {
      key: project?.key ?? uuid(),
      title,
      description,
      tasks,
    };

    if (project) {
      updateProject(newProject);
    } else {
      addProject(newProject);
    }
    onCancel();
  }

  return (
    <div className="space-y-4">
      <Input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        textarea
      />
      <Tasks value={tasks} onChange={(newTasks) => setTasks(newTasks)} />
      <menu className="flex gap-4">
        <li>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            disabled={checkValidInput()}
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save
          </button>
        </li>
        {project && (
          <li>
            <button
              onClick={() => onDelete(project.key)}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Delete
            </button>
          </li>
        )}
      </menu>
    </div>
  );
}
