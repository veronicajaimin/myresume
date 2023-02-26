import React from "react";
import Title from "./Shared/Title";
import { referencesData } from "../ResumeData";

const References = () => {
    return (

        <section className="reference section" id="reference">
            <Title title={referencesData.title}/>

        <div className="reference_container bd-grid">
            {referencesData.references.map((referred, i) => (
                <div className="reference_content" key={i}>
                    <p> <b>{referred.referred}</b> </p>
                    <p> {referred.position} </p>
                    <p className="referred"> {referred.organization} </p>
                    <p>Email: <a href={referred.email} rel="none"> {referred.email} </a> </p>
                    <p> {referred.phone} </p>
                </div>
            ))}
        </div>
        </section>
    )
}

export default References;