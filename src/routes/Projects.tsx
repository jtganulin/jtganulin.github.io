import { memo } from "react";
import type { IProject } from "../assets/ProjectData";
import { useHead, useLink } from "hoofd";
import PROJECTS_DATA from "../assets/ProjectData";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Projects.module.css";
import 'pure-react-carousel/dist/react-carousel.es.css';

function Projects() {
    useHead({
        title: "Projects",
        metas: [
            { name: "description", content: "View my portfolio of software projects, ranging from full-stack web development, to desktop and mobile applications." },
        ]
    });

    useLink({
        rel: "canonical",
        href: import.meta.env.VITE_APP_DOMAIN as string + "/projects"
    });

    return (
        <div className="constraint">
            <h1 className="pageHeading">Projects</h1>
            <main>
                <p>
                    I&apos;ve led and contributed to a variety of personal, academic,
                    and professional projects ranging from full-stack web development
                    to desktop and mobile applications in industries like tech, gaming, 
                    education, and more.
                    You can view some of my work below, along with the skills and technologies
                    I used to bring them to life.
                </p>
                <div className={styles.projectsGrid}>
                    {PROJECTS_DATA?.map((project: IProject) => (
                        <ProjectCard key={project?.slug} project={project} />
                    )) || (
                            <p>Error loading projects, please refresh the page or try again later.</p>
                        )}
                </div>
            </main>
        </div>
    );
}

export default memo(Projects);
