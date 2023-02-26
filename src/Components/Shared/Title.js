import React from "react";

const Title = ({title}) => {
    return (
        
        <section className="title section" id="title">
            <h2 className="title">{title}</h2>
            <p className="title_border"></p>
        </section>
    )
}

export default Title;