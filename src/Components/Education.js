import React from "react";
import Title from "./Shared/Title";
import { educationData } from "../ResumeData";

const Education = () => {
    return (

        <section className="education section" id="education" >
            <Title title={educationData.title}/> 

            <div className="education_container">
                {educationData.educations.map((education, i) => (
                    <div className="education_institute" key={i}>
                        <p> <b>{education.institution}</b> <i>{education.certificate}</i> </p>
                        <p> {education.duration} </p>
                        <p> {education.grade} </p>
                        <p> {education.muet} </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education;