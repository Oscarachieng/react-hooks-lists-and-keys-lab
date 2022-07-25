import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        <ul>
          {projects.map((project) => {
            return (
              <ProjectItem
                key={project.id}
                technologies={project.technologies}
                name = {project.name}
                about = {project.about}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectList;
