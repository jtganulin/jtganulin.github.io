import styles from "../styles/Education.module.css";

export default function Education() {
    return (
        <>
            <h1 className="sectionTitle">Education</h1>
            <div className={styles.educationEntry}>
                <em>Kennesaw State University</em>
                <br />
                <strong>M.S. Software Engineering (2023)</strong>
                <ul>
                    <li>Dean&apos;s 4.0 GPA Club (2023)</li>
                </ul>
                <details>
                    <summary>Relevant Coursework</summary>
                    <ul>
                        <li>Software Engineering Principles</li>
                        <li>Emerging Software Engineering Practices (Agile, Scrum, etc.)</li>
                        <li>Software Requirements Engineering</li>
                        <li>Software Architecture & Design</li>
                        <li>Software Testing</li>
                        <li>Software Project Management</li>
                        <li>Software Quality Evaluation & Measurement</li>
                        <li>Software Design Patterns</li>
                        <li>Web Services Engineering</li>
                        <li>Senior Capstone Project</li>
                    </ul>
                </details>
            </div>
            <div className={styles.educationEntry}>
                <em>Kennesaw State University</em>
                <br />
                <strong>B.S. Information Technology &bull; Concentration in Web & Mobile Systems (2020)</strong>
                <ul>
                    <li>President&apos;s List - 4.0 GPA (2017-2018)</li>
                    <li>National Society of Collegiate Scholars</li>
                </ul>
                <details>
                    <summary>Relevant Coursework</summary>
                    <ul>
                        <li>Advanced Programming Principles</li>
                        <li>Advanced and Mobile Web Development</li>
                        <li>Mobile Application Development</li>
                        <li>Database Design & Development</li>
                        <li>Computer Networking</li>
                        <li>Software and Hardware Architecture</li>
                        <li>Concepts of Operating Systems</li>
                        <li>Software Acquisition</li>
                        <li>Project Management</li>
                        <li>Security and Ethical Hacking Defense</li>
                        <li>Linux/Unix Administration</li>
                        <li>Senior Capstone Project</li>
                    </ul>
                </details>
            </div>
            <div className={styles.educationEntry}>
                <em>University of North Georgia</em>
                <br />
                <strong>
                    A.S. Computer Science (2017)
                </strong>
                <ul>
                    <li>Graduated with Distinction (3.5+ GPA)</li>
                    <li>President&apos;s List - 4.0 GPA (2015-2017)</li>
                    <li>Phi Theta Kappa Honor Society</li>
                    <li>National Society of Collegiate Scholars</li>
                </ul>
                <details>
                    <summary>Relevant Coursework</summary>
                    <ul>
                        <li>Programming I & II (Java)</li>
                        <li>Discrete Mathematics</li>
                        <li>Data Structures & Algorithms</li>
                    </ul>
                </details>
            </div>
        </>
    );
}
