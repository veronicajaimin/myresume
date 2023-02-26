import React from "react";
import Title from "./Shared/Title";
import { projectsData } from "../ResumeData";

const Projects = () => {
    return (

        <section className="projects section" id="project">
            <Title title={projectsData.title}/> 

            <div className="project_container">
                {projectsData.projects.map((project, i) => (
                    <div className="project_content" key={i}>
                        <p> <b>{project.title}</b> </p>
                        <p> <i>{project.type}</i> </p>
                        <p> {project.desc} </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;