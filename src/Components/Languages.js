import React from "react";
import Title from "./Shared/Title";
import { languagesData } from "../ResumeData";

const Languages = () => {
    return (
        <>
        <section className="languages section" id="language">
            <Title title={languagesData.title}/>

            <div className="language_container">
                <div className="language_content">
                    <p className="languages">{languagesData.languages}</p>
                </div>
            </div>
        </section>
        </>
    )   
}

export default Languages;