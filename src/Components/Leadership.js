import React from "react";
import Title from "./Shared/Title";
import { leadershipData } from "../ResumeData";

const Leadership = () => {
    return (

        <section className="leadership section" id="leadership">
            <Title title={leadershipData.title}/>

            <div className="leadership_container">
                {leadershipData.leaderships.map((leader, i) => (
                    
                    <ul className="leadership_content" key={i}>
                        <li>{leader}</li>
                    </ul>
                ))}
            </div>
        </section>
    )
}

export default Leadership;