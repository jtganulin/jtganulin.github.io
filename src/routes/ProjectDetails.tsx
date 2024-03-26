import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Helmet from 'react-helmet';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import type { iProject } from "../assets/ProjectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconName } from "@fortawesome/fontawesome-svg-core";
import PROJECTS_DATA from "../assets/ProjectData";
import SKILLS_DATA from '../assets/SkillData';
import SkillBadge from '../components/SkillBadge';
import styles from "../styles/ProjectDetails.module.css";
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function ProjectDetails({ slug }: { slug?: string; }) {
    const params = useParams();

    const project: (iProject | undefined) = useMemo(() => {
        return PROJECTS_DATA?.find?.((project: iProject) => project.slug === params?.slug || project.slug === slug);
    }, [params, slug]);

    if (!project) {
        return <Navigate to='/projects/' replace={true} />;
    }

    return (
        <>
            <Helmet>
                <title>{project.title}</title>
                <meta name="description" content={project.description} />
                <link rel="canonical" href={import.meta.env.VITE_APP_DOMAIN as string + "/projects/" + project.slug} />
            </Helmet>
            <div className="constraint">
                <div className={styles.titleContainer}>
                    <h1>{project.title}</h1>
                    {project?.subtitle && (
                        <h4>{project.subtitle}</h4>
                    )}
                </div>
                <div className={styles.projectContent}>
                    {project?.images && project?.images?.length > 1 && (
                        <CarouselProvider
                            className={styles.images}
                            naturalSlideWidth={1920}
                            naturalSlideHeight={1080}
                            totalSlides={project?.images?.length ?? 0}
                            isPlaying={true}
                        >
                            <Slider>
                                {project?.images?.map?.((image: string) => (
                                    <Slide key={image} index={project.images!.indexOf(image)}>
                                        {/* TODO: Srcset: On mobile use scaled thumbnail, on tablet and desktop use full-size image */}
                                        <img height={1080} width={1920} src={"/images/" + project.slug + "/" + image} alt={"Image of " + project.title} title={"Image of " + project.title} />
                                    </Slide>
                                ))}
                            </Slider>
                            <div className={styles.imageControls}>
                                <ButtonBack>&lt; Previous</ButtonBack>
                                <ButtonNext>Next &gt;</ButtonNext>
                            </div>
                        </CarouselProvider>
                    )}
                    <div className={styles.links}>
                        {project?.github && (
                            <div>
                                <a href={project?.github} target="_blank" rel="noopener, noreferrer" title={"View source code for " + project.title}>
                                    <FontAwesomeIcon icon={"fab fa-github" as IconName} /> View Project on Github
                                </a>
                            </div>
                        )}
                        {project?.url && (
                            <div>
                                <a href={project?.url} target="_blank" rel="noopener, noreferrer" title={"View live demo of " + project.title}>
                                    <FontAwesomeIcon icon={"fas fa-external-link-alt" as IconName} /> View Project Demo
                                </a>
                            </div>
                        )}
                    </div>
                    <h3>Description</h3>
                    <div>
                        {project.description}
                    </div>
                    <h3>Accomplishments</h3>
                    <div>
                        <ul>
                            {project?.accomplishments?.map?.((accomplishment: string) => (
                                <li key={accomplishment}>{accomplishment}</li>
                            ))}
                        </ul>
                    </div>
                    <h3>Skills Used</h3>
                    <div className={styles.skills}>
                        {project?.skills?.map?.((skill: string) => (
                            <SkillBadge key={project.slug + skill} skill={SKILLS_DATA.find(s => s.name === skill)!} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
