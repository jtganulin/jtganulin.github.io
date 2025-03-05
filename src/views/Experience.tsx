import styles from "../styles/Experience.module.css";
import { Link } from "react-router-dom";

export default function Experience() {
    return (
        <div className={styles.container}>
            <div>
                <h3>Professional Experience</h3>
                <ul>
                    <li>
                        <h4>The Iron Door Specialist <span>(August 2019 - January 2022)</span></h4>
                        <h5><em>Full-stack Software Engineer</em></h5>
                        <ul>
                            <li>Planned, designed, and developed a website with photo galleries, user feedback capabilities, and administration functions, based on PHP and Laravel 9, boosting audience reach by 100%.</li>
                            <li>Engineered image processing programs with Python and C# to streamline content management processes by more than 100%.</li>
                            <li>Incorporated SEO across the website, boosting audience reach significantly. Additionally maintained the website to handle upgrades, content changes, and feature requests.</li>
                            <li>Established and maintained online presence for the company across platforms such as Google My Business, further boosting the company&apos;s online visibility and engagement metrics, tracked with Google Analytics.</li>
                            <li>Communicated with key stakeholders to plan and refine content changes and new feature requests.</li>
                            <li>Maintained the website to handle security and performance upgrades.</li>
                        </ul>
                    </li>
                </ul>
                <h3>Projects</h3>
                <p>
                    {/* Possibly show various projects in slider? */}
                    I&apos;ve collaborated and led multiple projects spanning various technologies stacks and target industries, including academic, personal, and professionally scoped projects. You can view my completed projects on my <Link to="/projects">Projects</Link> page.
                </p>
            </div>
        </div>
    );
}
