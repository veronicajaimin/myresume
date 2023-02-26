/* ------------------------------------------------Resume First Page------------------------------------------------*/

const contactData = {
    location: "Kota Kinabalu, Sabah | ",
    phone: "+60 178618381 | ", 
    email: "veronicajaimin98@gmail.com",
    linkedin: "https://www.linkedin.com/in/veronicajaimin/",
}

const summaryData = {
    title: "Professional Summary",
    summaries: [
        {
            summary1: "An Information Systems graduate that experienced in coding, design, and software testing. A team player or individual contributor to accomplish a project on time. Currently seeking for an entry-level job opportunity in computer science and other relevant fields.",
            summary2: "Available to work immediately, willing to travel, and eager to learn new things.",
        },
    ],
}

const experienceData = {
    title: "Experience",
    experience: [
        {
            company: "Albrothers Quality Support (AQS), Kota Kinabalu",
            position: " — Intern Trainee",
            duration: "March 2021 – August 2021",
            description: [
                
                "Contributed to the development of a user-friendly and convenient e-ticketing platform via Web and Mobile App for Sabah Parks’ stakeholders and tourists.",
                "Participated in project planning activities, requirement gatherings, and client’s meeting.",
                "Involved in full systems development process, business process re-engineering, helpdesk, and support services.",
                "Assigned to do QAQC testing and UAT during development test to ensure it meets 85% of client’s requirements.",
                "Created user manual to assist end users in utilizing the final product.",
                "Conducted end-user training on the Sabah Parks’ Web and Mobile App.",
                "Provided call center escalation process and procedures.",
                "Created helpdesk tickets through Odoo system.",
                "Conducted research on IT solutions and self-learned Laravel framework.", 
            ],
            projects: "Projects involvement:",
            add: "Development of Sabah Parks Booking (Web) and Sabah Parks ePay (Mobile App)",
        },
    ],

    experiences : [
        {
            company: "PADINI Concept Store, Kota Kinabalu",
            position: " — Sales Assistance",
            duration: "May 2018 – August 2018",
            description: "Worked in achieving the monthly sales target of P&Co brand, and primarily geared towards serving customer.",
        },
        {
            company: "Kenny Roger Roasters, Kota Kinabalu",
            position: " — F&B Staff / Runner",
            duration: "March 2018 – May 2018",
            description: "Responsible for ensuring smooth operation in dining room, assisting frontlines and servers.",
        },
    ],

}

const educationData = {
    title: "Education",
    educations: [
        {
            institution: "University of Malaysia, Sarawak (UNIMAS)",
            certificate: " — Bachelor’s Degree of Computer Science (Information System)",
            duration: "September 2018 – July 2022",
            grade: "CGPA: 3.38",
        },
        {
            institution: "La Salle Secondary School, Kota Kinabalu",
            certificate: " — Malaysian Higher School Certificate (STPM)",
            grade: "CGPA: 2.50",
            muet: "MUET: Band 4",
        },
        {
            institution: "SMK Lok Yuk, Kota Kinabalu",
            certificate: " — Malaysian Certificate of Education (SPM)",
            grade: "Grade: 5A, 3B, 1C",
        },
    ],
}

/* ------------------------------------------------Resume Second Page------------------------------------------------*/

const projectsData = {
    title: "Projects",
    projects : [
        {
            title: "E-pharmacy with Pharmabot",
            type: "Final Year Project",
            desc: "Designed a web-application where users can search basic medication that is not life-threatening. This system has 2 user’s interface which are pharmacy owners and customers. A chatbot features called “Pharmabot” has been integrated where users can ask additional FAQs. Developed using PHP Laravel framework, HTML, CSS, JavaScript, Bootstrap, and integrated with Power Virtual Agents (chatbot).",
        },
        {
            title: "Machine Learning Based Predicting: Human Personality on Fruits Consumption in Young Adults",
            type: "Research studies",
            desc: "Developed a predictive model using 6 different machine learning algorithms in Python and dataset processed using panda module. The implemented algorithm is then determined the accuracy of overall prediction.",
        },
    ],
}

const leadershipData = {
    title: "Involvements and Leadership", 
    leaderships: [
        "Group leader of service-learning program in PDCC Semera. Provided MS Office and Excel as a training module to the community. (2022)",
        "FACA FEST UNIMAS Modern Dance Competition (2019)",
        "Festival Kesenian Inter Kolej (FKIK) UNIMAS Modern Dance Competition (2019)",
        "AJK Family of UNIMAS Borneo Cultural Festival: 3 Days (2019)",
        "UNIMAS Citrawarna Competition: Allamanda’s 2nd Place (2018)",
        "Malaysian Scout Federation: Krew Kelana 01 Daerah Sembulan (2017)",
    ],
}

const courseworkData = {
    title: "Coursework",
    courseworks : [
        "Data Engineering Professional Certification by RapidMiner (2021)",
        "Machine Learning Professional Certification by RapidMiner (2021)",
        "Application and Use Cases Professional by RapidMiner (2021)",
        "Intro to Machine Learning by Kaggle (2021)",
        "Python by Kaggle (2020)",
    ],
}

const skillsData = {
    title: "Skills",
    skills: [
        [
            "Soft skill: Team player, Adaptability, Analytical",
            "Front-end Dev: HTML, CSS, Bootstrap, JavaScript",
            "Programming: C, PHP, Python",
        ],
        [
            "Technical skill: Project Management, Designing, Testing, Video Editing",
            "Software: Canva, VS Code, Anima + Figma, RapidMiner, GitHub ",
        ],
    ],
}

const languagesData = {
    title: "Languages",
    languages: "Proficient in written and spoken English and Malay. Good in conversational Chinese.",
}

const referencesData = {
    title: "References",
    references: [
        {
            referred: "DR TAN PING PING",
            position: "FYP Supervisor",
            organization: "Faculty of Computer Science and Information Technology, University of Malaysia, Sarawak.",
            email: "pptan@unimas.my",
            phone: "Phone: +60 13-827 8000",
        },
        {
            referred: "ARIEF RINALDI LUKMAN",
            position: "Project Manager & Chief Operating Officer",
            organization: "Albrothers Quality Support (AQS) Sdn. Bhd., Kota Kinabalu, Sabah.",
            email: "arief@albrothers.com.my",
            phone: "Phone: +60 11-10031530",
        },
    ],
}

export {
    contactData,
    summaryData, 
    experienceData, 
    educationData, 
    projectsData, 
    leadershipData, 
    courseworkData,
    skillsData,
    languagesData,
    referencesData
}

