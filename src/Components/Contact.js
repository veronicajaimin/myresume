import React from "react";
import { contactData } from "../ResumeData";

const Contact = () => {
    return (

        <section className="contact section" id="contact">
            <div className="contact_container">
                <div className="contact_data">
                    <h3 className="contact_location">{contactData.location}</h3>
                    <h3 className="contact_phone">{contactData.phone}</h3>
                    <h3 className="column_color"> 
                        <a className="contact_email" href={contactData.email}> {contactData.email} </a>
                         | <a className="contact_linkedin" href={contactData.linkedin}> {contactData.linkedin} </a> 
                    </h3>
                    
                </div>
            </div>  
                <p className="contact_border"></p>
        </section>
    )
}

export default Contact;