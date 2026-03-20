import styles from "../styles/Experience.module.css";
import { Link } from "react-router-dom";

export default function Experience() {
    return (
        <div className={styles.container}>
            <h3>Professional Experience</h3>
            <ul>
                <li>
                    <h4>Freelance Web Development<span> (February 2025 - Present)</span></h4>
                    <ul>
                        <li>Currently developing 3 client websites across healthcare, education, and construction industries (in progress)</li>
                        <li>Build and customize websites using modern WordPress, PHP, HTML5, and CSS3</li>
                        <li>Develop custom contact forms and dynamic site functionality tailored to client needs</li>
                        <li>Modify and extend the WordPress interface to create intuitive, user-friendly content management experiences for non-technical users</li>
                        <li>Translate business requirements into functional, accessible web solutions</li>
                        <li>Ensure responsive design and cross-browser compatibility across all projects</li>
                    </ul>
                </li>
                <li>
                    <h4>Full-stack Software Engineer<span> - <em>The Entryway Surgeons</em> - (August 2019 - Present)</span></h4>
                    <ul>
                        <li>Designed and developed a dynamic website with HTML5, CSS3, JavaScript, Alpine.js, PHP 8, and Laravel 12, featuring photo galleries, user feedback capabilities, and administration functions, boosting audience reach by 100%.</li>
                        <li>Engineered image processing programs with Python and C# to streamline content management processes by over 100%.</li>
                        <li>Integrated Google Business Profile APIs via OAuth to display the company's Google reviews directly on the site, boosting user trust.</li>
                        <li>Implemented an admin interface to allow company staff to manage user reviews and gallery images.</li>
                        <li>Established and managed the company&apos;s online presence across platforms like Google My Business, enhancing visibility and engagement with Google Analytics tracking.</li>
                        <li>Collaborated with key stakeholders to plan content updates and implement new features based on business needs.</li>
                        <li>Maintain the website to handle upgrades, content changes, and feature requests in a flexible requirements environment.</li>
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
