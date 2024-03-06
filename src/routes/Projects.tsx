import Helmet from "react-helmet";
import type { Project as ProjectType } from "../assets/ProjectData";
import PROJECTS_DATA from "../assets/ProjectData";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Projects.module.css";

export default function Projects() {
    return (
        <>
            <Helmet>
                <title>Projects</title>
                <meta name="description" content="View my collection of personal, academic, and professional projects, ranging from full-stack web development, to desktop and mobile applications." />
                <link rel="canonical" href={import.meta.env.VITE_APP_DOMAIN as string + "/projects" ?? ""} />
            </Helmet>
            <h1 className="pageHeading">Projects</h1>
            <main>
                <p>
                    I&apos;ve led and contributed to a variety of personal, academic, and professional, projects, ranging 
                    from full-stack web development, to desktop and mobile applications. You can view some of my work below, 
                    along with the skills and technologies I used to bring them to life.
                </p>
                <div className={styles.projectsGrid}>
                    {PROJECTS_DATA?.map((project: ProjectType) => (
                        <ProjectCard key={project?.slug} project={project} />
                    )) || (
                        <p>No projects found.</p>
                    )}
                </div>
            </main>
        </>
    );
}
