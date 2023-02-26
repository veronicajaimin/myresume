import React from "react";
import "./index.scss";
import Name from "./Components/Name";
import Contact from "./Components/Contact";
import Summary from "./Components/Summary";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Leadership from "./Components/Leadership";
import Coursework from "./Components/Coursework";
import Skills from "./Components/Skills";
import Languages from "./Components/Languages";
import References from "./Components/References";

function App () {
    return (
        <>
        <div className="App">
            <div className="page">
                <div className="subpage">
                    <Name/>
                    <Contact/>
                    <Summary/>
                    <Experience/>
                    <Education/>
                </div>
            </div>

            <div className="page">
                <div className="subpage">
                    <Projects/>
                    <Leadership/>
                    <Coursework/>
                    <Skills/>
                    <Languages/>
                    <References/>
                </div>
            </div>
        </div>
             
        </>
    );
}

export default App;









