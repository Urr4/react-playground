import {Project} from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import {useState} from "react";

interface ProjectListProps {
  projects: Project[],
  onSave: (project: Project) => void
}

export default function ProjectList({projects, onSave}: ProjectListProps) {

  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const onEditProject = (project: Project) => {
    setProjectBeingEdited(project);
  }

  const cancelEditing = () => {
    setProjectBeingEdited({});
  }

  return (
      <div className="row">
        {
          projects.map(project =>
              <div key={project.id}>
                {project === projectBeingEdited ?
                    <ProjectForm project={project} onCancel={cancelEditing} onSave={onSave}/> :
                    <ProjectCard project={project} onEdit={onEditProject}/>}
              </div>
          )
        }
      </div>
  );
}
