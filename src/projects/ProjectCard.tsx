import {Project} from "./Project";

interface ProjectCardProp {
  project: Project,
  onEdit: (project: Project) => void
}

export default function ProjectCard({project, onEdit}: ProjectCardProp) {

  const handleEditClick = (projectClicked: Project) => {
    onEdit(projectClicked);
  };

  return (
      <div className="cols-sm">
        <div className="card">
          <img src={project.imageUrl} alt={project.name}/>
          <section className="section dark">
            <h5 className="strong">
              <strong>{project.name}</strong>
            </h5>
            <p>{project.description}</p>
            <p>Budget: {project.budget}</p>
            <button
                className="bordered"
                onClick={() => handleEditClick(project)}
            >
              <span className="icon-edit"></span>
              Edit
            </button>
          </section>
        </div>
      </div>
  );
}