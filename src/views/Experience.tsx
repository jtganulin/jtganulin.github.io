import styles from "../styles/Experience.module.css";
import { Link } from "react-router-dom";

export default function Experience() {
    return (
        <div className={styles.container}>
            <h3>Professional Experience</h3>
            <ul>
                <li>
                    <h4>The Iron Door Specialist <span>(August 2019 - January 2022)</span></h4>
                    <h5><em>Full-stack Software Engineer</em></h5>
                    <ul>
                        <li>Designed and developed a dynamic website with PHP and Laravel 9, featuring photo galleries, user feedback capabilities, and administration functions, boosting audience reach by 100%.</li>
                        <li>Engineered image processing programs with Python and C# to streamline content management processes by over 100%.</li>
                        <li>Maintained the website to handle upgrades, content changes, and feature requests in a flexible requirements environment.</li>
                        <li>Established and managed the company&apos;s online presence across platforms like Google My Business, enhancing visibility and engagement with Google Analytics tracking.</li>
                        <li>Collaborated with key stakeholders to plan content updates and implement new features based on business needs.</li>
                    </ul>
                </li>
            </ul>
            <h3>Projects</h3>
            <p>
                {/* TODO: Possibly show various projects in slider? */}
                I&apos;ve led and collaborated on projects in academic, personal, and professional endeavors, delivering value with my unique perspectives and strong work ethic. These projects have allowed me to build proficiencies with a variety of tech stacks and soft skills. Explore my completed work and which skills were involved and improved in each on the <Link to='/projects'>Projects</Link> page.
            </p>
        </div>
    );
}
