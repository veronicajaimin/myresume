import React from "react";
import { summaryData } from "../ResumeData";

const Summary = () => {
    return (

        <section className="summary section" id="summaries">
            <p className="summary_title">{summaryData.title}</p>

            <div className="summary_container">
                {summaryData.summaries.map((summary, i) => (
                    <div className="summary_content" key={i}>
                        <p className="summary1"> {summary.summary1}</p>
                        <p className="summary2"><b>{summary.summary2}</b></p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Summary;