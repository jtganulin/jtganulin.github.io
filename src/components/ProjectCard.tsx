import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import type { Project } from '../assets/ProjectData';
import styles from '../styles/ProjectCard.module.css';
import SKILLS_DATA from '../assets/SkillData';
import SkillBadge from './SkillBadge';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function ProjectCard({ project }: { project: Project }) {
    for (let i = 0; i < project?.skills?.length; i++) {
        if (!SKILLS_DATA.find(s => s.name === project.skills[i])) {
            console.log("Skill not found: " + project.skills[i]);
        }
    }

    const toggleBlur = (e: React.UIEvent<HTMLDivElement>) => {
        // If the scroll position is at the top, restore the blur, otherwise hide it
        if (e.currentTarget?.parentNode?.children[1]) {
            (e.currentTarget.parentNode.children[1] as HTMLDivElement).style.opacity = String((e.currentTarget.scrollTop === 0) ? 1 : 0);
        }
    };

    useLayoutEffect(() => {
        // If the height of the {styles.skills} div is less than the height of the {styles.skillsContainer} div, hide the blur
        const skillsContainer = document.querySelectorAll("." + styles.skillsContainer);
        const skills = document.querySelectorAll("." + styles.skills);

        for (let i = 0; i < skillsContainer.length; i++) {
            if (skills[i].scrollHeight <= skillsContainer[i].clientHeight) {
                (skillsContainer[i].children[1] as HTMLDivElement).style.display = "none";
            }
        }
    }, []);

    return (
        <div className={styles.projectCard}>
            <div className={styles.projectIntro}>
                <h3>{project.title}</h3>
                {project?.subtitle && (
                    <h4>{project.subtitle}</h4>
                )}
            </div>
            {project?.images && project?.images.length > 0 && (
                <div className={styles.projectImages}>
                    <CarouselProvider
                        naturalSlideWidth={530}
                        naturalSlideHeight={300}
                        totalSlides={project?.images?.length ?? 0}
                        isPlaying={true}
                        interval={3500}
                        infinite={true}
                    >
                        {/* <ButtonBack className={styles.carouselButtonBack}>Back</ButtonBack>
                        <ButtonNext className={styles.carouselButtonNext}>Next</ButtonNext> */}
                        <Slider>
                            {project?.images?.map((image, index) => (
                                <Slide index={index} key={project.slug + index}>
                                    <img className={styles.image} src={"../images/thumbnails/" + project.slug + "/" + image} alt={"Image of " + project.title} title={"Image of " + project.title} height={300} width={530} loading="lazy" />
                                </Slide>
                            ))}
                        </Slider>
                    </CarouselProvider>
                </div>
            )}
            <p className={styles.projectSummary}>{project.summary}</p>
            <div className={styles.skillsContainer}>
                <div className={styles.skills} onScroll={e => toggleBlur(e)}>
                    {project?.skills?.map(skill => (
                        <div key={project.slug + skill}>
                            <SkillBadge skill={SKILLS_DATA.find(s => s.name === skill)!} showProficiency={false} />
                        </div>
                    ))}
                </div>
                <div className={styles.skillsBlur}></div>
            </div>
            <div className={styles.projectLinks}>
                {/* {project?.github && (
                    <Link to={project?.github} target="_blank" rel="noopener, noreferrer" title={"View live demo of " + project.title}>
                        View Project on Github
                    </Link>
                )}
                {project?.url && (
                    <Link to={project?.url} target="_blank" rel="noopener, noreferrer" title={"View live demo of " + project.title}>
                        View Project Demo
                    </Link>
                )} */}
                <Link to={"/projects/" + project.slug}>
                    <button>
                        View Project Details
                    </button>
                </Link>
            </div>
        </div>
    );
}
