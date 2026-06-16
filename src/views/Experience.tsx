import styles from "../styles/Experience.module.css";
import { Link } from "react-router-dom";

export default function Experience() {
    return (
        <div className={styles.container}>
            <h3>Professional Experience</h3>
            <div className={styles.experienceContainer}>
                <ul>
                    <li>
                        <h4>Full-Stack Software Engineer<span> - <em>The Entryway Surgeons</em> (January 2026 – March 2026)</span></h4>
                        <ul>
                            <li>Modernized a legacy Laravel platform by upgrading the application stack to Laravel 12, PHP 8, Tailwind CSS v4, and Alpine.js, improving maintainability, responsiveness, and frontend performance.</li>
                            <li>Integrated Google Business Profile review synchronization through OAuth-authenticated APIs to automate customer review management and improve site credibility.</li>
                            <li>Streamlined administrative interfaces and internal workflows to improve operational efficiency and content management usability, saving hours per week.</li>
                            <li>Improved technical SEO, responsive presentation, and overall site quality, contributing to increased online visibility and generating more than 20 new customer leads in a competitive market.</li>
                            <li>Provided ongoing maintenance support and periodic updates, with additional rebranding development planned in future phases.</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Freelance Web Developer<span> (February 2025 – Present)</span></h4>
                        <ul>
                            <li>Developing 2 client websites across healthcare and education industries using WordPress, PHP 8, HTML5, JavaScript, and CSS3, with responsive design principles.</li>
                            <li>Create custom contact forms and dynamic site functionality tailored to client needs to improve user experience and drive engagement.</li>
                            <li>Modify and extend the WordPress interface to create intuitive, user-friendly content management experiences for non-technical users.</li>
                            <li>Collaborate with clients to translate business requirements into functional, accessible web solutions which achieve client objectives.</li>
                            <li>Consult with clients to plan deployment and maintenance strategies to optimize costs and efficiency.</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Full-Stack Software Engineer<span> - <em>The Entryway Surgeons</em> (August 2019 – February 2022)</span></h4>
                        <ul>
                            <li>Designed and developed a full-stack responsive web platform for a door and window installation company using Laravel 8, PHP 7, JavaScript, jQuery, HTML5, and CSS3.</li>
                            <li>Implemented multimedia gallery systems, custom administrative functionality, and customer feedback features, backed by relational database structures, to improve client engagement and content management capabilities.</li>
                            <li>Managed ongoing website maintenance, performance optimizations, feature enhancements, and platform upgrades supporting the company&apos;s online presence.</li>
                            <li>Developed internal workflows and CMS functionality to streamline business operations and improve content publishing efficiency.</li>
                            <li>Engineered Python and C# automation tools that reduced content management workflows from multi-day manual processes to under two hours.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <h3>Projects</h3>
            <p>
                {/* TODO: Possibly show various projects in slider? */}
                I&apos;ve led and collaborated on projects in academic, personal, and professional endeavors, delivering value with my unique perspectives and strong work ethic. These projects have allowed me to build proficiencies with a variety of tech stacks and soft skills. Explore my completed work and which skills were involved and improved in each on the <Link to='/projects'>Projects</Link> page.
            </p>
        </div>
    );
}
