import { useState } from "react";
import CreateProject from "./components/CreateProject";
import Header from "./components/Header";
import ProjectSidebar from "./components/ProjectSidebar";

export default function App() {
  const [isCreating, setIsCreating] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function setCreate() {
    setIsCreating((prev) => !prev);
    setSelectedProject(null);
  }

  function AddProject(project) {
    setProjects((prevProjects) => [project, ...prevProjects]);
    setIsCreating(false);
  }

  function showProject(key) {
    const project = projects.find((p) => p.key === key);
    setSelectedProject(project);
  }

  function stopCreating() {
    setIsCreating(false);
  }

  function handleRemove(key) {
    setSelectedProject(null);
    setProjects((prevProjects) => prevProjects.filter((ele) => ele.key !== key));
  }

  function handleUpdate(updatedProject) {
    setProjects((prevProjects) =>
      prevProjects.map((ele) =>
        ele.key === updatedProject.key ? updatedProject : ele
      )
    );
    setSelectedProject(updatedProject);
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-slate-100 to-slate-200 font-sans">
      <ProjectSidebar
        showProject={showProject}
        handleClick={setCreate}
        ProjectList={projects}
      />
      <main className="flex-1 p-10 overflow-y-auto">
        {!isCreating && !selectedProject && <Header handleClick={setCreate} />}
        {isCreating && (
          <CreateProject addProject={AddProject} onCancel={stopCreating} />
        )}

        {!isCreating && selectedProject && (
          <CreateProject
            key={selectedProject.key}
            project={selectedProject}
            updateProject={handleUpdate}
            onCancel={() => setSelectedProject(null)}
            onDelete={handleRemove}
          />
        )}
      </main>
    </div>
  );
}