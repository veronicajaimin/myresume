import React from "react";
import Title from "./Shared/Title";
import { skillsData } from "../ResumeData";

const Skills = () => {
    return (

        <section className="skills section" id="skills">
            <Title title={skillsData.title}/>

            <div className="skills_container bd-grid">
                {skillsData.skills.map((skill, i) => (
                    
                    <ul className="skills_content" key={i}>
                        {skill.map((eSkill, k) => (
                            <li className="skills_list" key={k}>
                                {eSkill}
                            </li>
                        ))} 
                    </ul>
                ))}
            </div>
        </section>
    )
}

export default Skills;

