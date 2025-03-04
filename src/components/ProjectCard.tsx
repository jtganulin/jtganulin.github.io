import { memo, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import type { IProject } from '../assets/ProjectData';
import styles from '../styles/ProjectCard.module.css';
import SKILLS_DATA from '../assets/SkillData';
import SkillBadge from './SkillBadge';
import 'pure-react-carousel/dist/react-carousel.es.css';

function ProjectCard({ project }: { project: IProject; }) {
    const skillsContainerRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const toggleBlur = (e: React.UIEvent<HTMLDivElement>) => {
        // If the scroll position is at the top, restore the blur, otherwise hide it
        if (e.currentTarget?.parentNode?.children[1]) {
            (e.currentTarget.parentNode.children[1] as HTMLDivElement).style.opacity = String((e.currentTarget.scrollTop === 0) ? 1 : 0);
        }
    };

    useEffect(() => {
        // If the height of the {styles.skills} div is less than the height of the {styles.skillsContainer} div, hide the blur
        if (!(skillsRef.current && skillsContainerRef.current)) return;

        if (skillsRef.current.scrollHeight <= skillsContainerRef.current.clientHeight) {
            (skillsContainerRef.current.children[1] as HTMLDivElement).style.display = "none";
        }
    }, [skillsRef, skillsContainerRef]);

    return (
        <div className={styles.projectCard}>
            <div className={styles.projectIntro}>
                <h3>
                    <Link
                        to={"/projects/" + project.slug}
                        role="button"
                        title={"View project details for " + project.title}
                    >
                        {project.title}
                    </Link>
                </h3>
                {project?.subtitle && (
                    <h4><em>{project.subtitle}</em></h4>
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
            <div className={styles.skillsContainer} ref={skillsContainerRef}>
                <div className={styles.skills} onScroll={e => toggleBlur(e)} ref={skillsRef}>
                    {project?.skills?.map(skill => (
                        <div key={project.slug + skill}>
                            <SkillBadge skill={SKILLS_DATA.find(s => s.name === skill)!} showProficiency={false} />
                        </div>
                    ))}
                </div>
                <div className={styles.skillsBlur}></div>
            </div>
            {project?.description && (
                <div className={styles.projectLinks}>
                    <button type="button" onClick={() => navigate("/projects/" + project.slug)}>
                        View Project Details
                    </button>
                </div>
            )}
        </div>
    );
}

export default memo(ProjectCard);
