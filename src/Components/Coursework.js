import React from "react";
import Title from "./Shared/Title";
import { courseworkData } from "../ResumeData";

const Coursework = () => {
    return (

        <section className="coursework section" id="coursework">
            <Title title={courseworkData.title}/>

            <div className="coursework_container">
                {courseworkData.courseworks.map((course, i) => (
                    <div className="coursework_content" key={i}>
                        <p>{course}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Coursework;