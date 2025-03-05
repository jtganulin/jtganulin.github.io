import { useState } from "react";
import styles from "../styles/Education.module.css";

const educationEntries = [
    {
        school: "Kennesaw State University",
        degree: "M.S. Software Engineering (2023)",
        honors: ["Dean's 4.0 GPA Club (2023)"],
        coursework: [
            "Software Engineering Principles",
            "Emerging Software Engineering Practices (Agile, Scrum, etc.)",
            "Software Requirements Engineering",
            "Software Architecture & Design",
            "Software Testing",
            "Software Project Management",
            "Software Quality Evaluation & Measurement",
            "Software Design Patterns",
            "Web Services Engineering",
            "Senior Capstone Project",
        ],
    },
    {
        school: "Kennesaw State University",
        degree: "B.S. Information Technology - Concentration in Web & Mobile Systems (2020)",
        honors: ["President's List - 4.0 GPA (2017-2018)", "National Society of Collegiate Scholars"],
        coursework: [
            "Advanced Programming Principles",
            "Advanced and Mobile Web Development",
            "Mobile Application Development",
            "Database Design & Development",
            "Computer Networking",
            "Software and Hardware Architecture",
            "Concepts of Operating Systems",
            "Software Acquisition",
            "Project Management",
            "Security and Ethical Hacking Defense",
            "Linux/Unix Administration",
            "Senior Capstone Project",
        ],
    },
    {
        school: "University of North Georgia",
        degree: "A.S. Computer Science (2017)",
        honors: ["Graduated with Distinction (3.5+ GPA)", "President's List - 4.0 GPA (2015-2017)", "Phi Theta Kappa Honor Society", "National Society of Collegiate Scholars"],
        coursework: [
            "Programming I & II (Java)",
            "Discrete Mathematics",
            "Data Structures & Algorithms",
        ],
    }
];

// TODO: Constrain the total height of the section so that expanding relevant coursework doesn't excessively stretch the associated background image
function Education() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDetails = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.educationContainer}>
            {educationEntries.map((entry, index) => (
                <EducationEntry
                    key={index}
                    {...entry}
                    isOpen={openIndex === index}
                    toggleOpen={() => toggleDetails(index)}
                />
            ))}
        </div>
    );
}

interface IEducationEntry {
    school: string;
    degree: string;
    honors?: string[];
    coursework: string[];
    isOpen: boolean;
    toggleOpen: () => void;
}

const EducationEntry = ({
    school,
    degree,
    honors,
    coursework,
    isOpen,
    toggleOpen
}: IEducationEntry) => {
    return (
        <div className={styles.educationEntry}>
            <strong>{degree}</strong>
            <br />
            <em>{school}</em>
            {honors && (
                <ul>
                    {honors.map((honor, index) => (
                        <li key={index}>{honor}</li>
                    ))}
                </ul>
            )}
            <details open={isOpen} onClick={(e) => {
                e.preventDefault();
                toggleOpen();
            }}>
                <summary>Relevant Coursework</summary>
                <div className={styles.coursework}>
                    <ul>
                        {coursework.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>
            </details>
        </div>
    );
};

export default Education;
