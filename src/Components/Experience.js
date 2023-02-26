import React from "react";
import Title from "./Shared/Title";
import { experienceData } from "../ResumeData";

const Experience = () => {
    return (

        <section className="experience section" id="experience">
            <Title title={experienceData.title}/>

            <div className="experience_container">

            {experienceData.experience.map((experience, i) => (
            <>
                <div className="experience_content" key={i}>
                    <p className="experience_company"><b>{experience.company}</b> <i>{experience.position}</i></p>
                    <p className="experience_duration">{experience.duration}</p>
                    <ul className="a">
                        {experience.description.map((desc, n) => (
                            <li key={n}> {desc} </li>
                        ))}
                        <p className="experience_project"><b>{experience.projects}</b></p>
                        <li>{experience.add}</li>
                    </ul>
                </div>
                </>
            ))}

            {experienceData.experiences.map((experience, k) => (
            <>
                <div className="experience_content" key={k}>
                    <p className="experience_company"><b>{experience.company}</b> <i>{experience.position}</i></p>
                    <p className="experience_duration">{experience.duration}</p>
                
                    <ul className="a">
                        <li>
                            <p> {experience.description} </p>
                        </li>
                    </ul>

                </div>                    
            </>
            ))}
                
            </div>
        </section>
    )
}

export default Experience;