import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Helmet from 'react-helmet';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import type { Project as ProjectType } from "../assets/ProjectData";
import PROJECTS_DATA from "../assets/ProjectData";
import SKILLS_DATA from '../assets/SkillData';
import SkillBadge from '../components/SkillBadge';
import styles from "../styles/ProjectDetails.module.css";

export default function ProjectDetails({ slug }: { slug?: string }) {
    const params = useParams();
    
    const project: (ProjectType | undefined) = useMemo(() => {
        return PROJECTS_DATA?.find?.((project: ProjectType) => project.slug === params?.slug || project.slug === slug)
    }, [params, slug]);
    
    if (!project) {
        return <Navigate to='/projects/' replace={true} />;
    }

    return (
        <>
            <Helmet>
                <title>{project.title}</title>
                <meta name="description" content={project.description} />
                <link rel="canonical" href={import.meta.env.VITE_APP_DOMAIN as string + "/projects/" + project.slug ?? ""} />
            </Helmet>
            <div className={styles.titleContainer}>
                <div>
                    <h1>{project.title}</h1>
                    {project?.subtitle && (
                        <h4>{project.subtitle}</h4>
                    )}
                </div>
                {/* <Link title="Back to All Projects" to="/projects"><button>Back to All Projects</button></Link> */}
            </div>
            <div>
                <div className={styles.images}>
                    <CarouselProvider
                        naturalSlideWidth={1920}
                        naturalSlideHeight={1080}
                        totalSlides={project?.images?.length ?? 0}
                        isPlaying={true}
                    >
                        <Slider>
                            {project?.images?.map?.((image: string) => (
                                <Slide key={image} index={project.images!.indexOf(image)}>
                                    {/* TODO: Srcset: On mobile use scaled thumbnail, on tablet and desktop use full-size image */}
                                    <img src={"/images/" + project.slug + "/" + image} alt={"Image of " + project.title} title={"Image of " + project.title} />
                                </Slide>
                            ))}
                        </Slider>
                        <div className={styles.imageControls}>
                            <ButtonBack>Back</ButtonBack>
                            <ButtonNext>Next</ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
                <h3>Description</h3>
                <div className={styles.description}>
                    {project.description}
                </div>
                <h3>Skills Used</h3>
                <div className={styles.skills}>
                    {project?.skills?.map?.((skill: string) => (
                        <SkillBadge key={project.slug + skill} skill={SKILLS_DATA.find(s => s.name === skill)!} />
                    ))}
                </div>
                <h3>Accomplishments</h3>
                <div className={styles.accomplishments}>
                    <ul>
                        {project?.accomplishments?.map?.((accomplishment: string) => (
                            <li key={accomplishment}>{accomplishment}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.links}>
                    {project?.github && (
                        <a href={project?.github} target="_blank" rel="noopener, noreferrer" title={"View source code for " + project.title}>
                            View Project on Github
                        </a>
                    )}
                    {project?.url && (
                        <a href={project?.url} target="_blank" rel="noopener, noreferrer" title={"View live demo of " + project.title}>
                            View Project Demo
                        </a>
                    )}
                </div>
            </div>
        </>
    );
}
