import {MOCK_PROJECTS} from "./MockProjects";
import ProjectList from "./ProjectList";
import {Project} from "./Project";

function ProjectsPage() {

  const onSaveProject = (project: Project) => {
    console.log("ProjectPage: Save project ", project);
  }

  return (
      <>
        <h1>Projects</h1>
        <ProjectList projects={MOCK_PROJECTS} onSave={onSaveProject}/>
      </>
  );
}

export default ProjectsPage;