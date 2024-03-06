import { useRef } from 'react';
import Helmet from 'react-helmet';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Intro from '../views/Intro';
import Bio from '../views/Bio';
import Education from '../views/Education';
import SkillsList from '../components/SkillsList';
import Experience from '../views/Experience';

import styles from '../styles/Home.module.css';

export default function Home() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray("section").forEach((section, i) => {
            const sectionElement = section as HTMLElement;
            sectionElement.querySelector("." + styles.bg)!.style.backgroundImage = `url(https://picsum.photos/800/400?random=${i})`;

            // Fade in the sections on scroll
            sectionElement.tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true
                }
            });

        });

        return () => {
            // Clean up the scroll trigger on unmount; we only want to kill the Home scroll trigger
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.vars.trigger === containerRef.current) {
                    trigger.kill();
                }
            });

            // Remove any event listeners
        }
    }, { scope: containerRef });

    return (
        <>
            <Helmet>
                <title>Home</title>
                <link rel="canonical" href={import.meta.env.VITE_APP_DOMAIN as string + "/" ?? ""} />
            </Helmet>
            <main ref={containerRef} className={styles.main}>
                <section id="hello">
                    <div className={styles.homeSection}>
                        <div className={styles.homeSectionContent}>
                            <Intro />
                            {/* TODO: Resume; Move to About Me section below? */}
                            <p>View my resume <a href="#" target="_blank" rel="noreferrer">here</a> or scroll down to learn more about me.</p>
                        </div>
                    </div>
                    <div className={styles.bg}></div>
                </section>
                <section id="bio">
                    <div className={styles.homeSection}>
                        <div className={styles.homeSectionContent}>
                            <Bio />
                            <p><em>Scroll further to view my education, experience, and skills.</em></p>
                        </div>
                    </div>
                    <div className={styles.bg}></div>
                </section>
                <section id="education">
                    <div className={styles.homeSection}>
                        <div className={styles.homeSectionContent}>
                            <Education />
                            <p><em>Scroll further to view my experience and skills.</em></p>
                        </div>
                    </div>
                    <div className={styles.bg}></div>
                </section>
                <section id="experience">
                    <div className={styles.homeSection}>
                        <div className={styles.homeSectionContent}>
                            <Experience />
                            <p><em>Scroll further to view my technical and soft skills.</em></p>
                        </div>
                    </div>
                    <div className={styles.bg}></div>
                </section>
                <section id="skills">
                    <div className={styles.homeSection}>
                        <div className={styles.homeSectionContent}>
                            <SkillsList showSearch showLegend showProficiency /* showYears */ />
                        </div>
                    </div>
                    <div className={styles.bg}></div>
                </section>
                <div>
                    <button
                        onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className={styles.scrollToTop}
                        aria-label="Scroll to Top"
                    >
                        <span>↑ Back to Top</span>
                    </button>
                </div>
            </main>
        </>
    );
}
