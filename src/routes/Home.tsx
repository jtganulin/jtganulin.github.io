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
    const container = useRef(null);

    useGSAP((context, contextSafe) => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray("section").forEach((section, i) => {
            section.querySelector("." + styles.bg)!.style.backgroundImage = `url(https://picsum.photos/800/400?random=${i})`;

            // Fade in the sections on scroll
            section.tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true
                }
            }, contextSafe);

        });

        return () => {
            // Clean up the scroll trigger on unmount; we only want to kill the Home scroll trigger
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.vars.trigger === container.current) {
                    trigger.kill();
                }
            });

            // Remove any event listeners
        }
    }, { scope: container });

    return (
        <>
            <Helmet>
                <title>Home</title>
                <link rel="canonical" href="https://.com/" />
            </Helmet>
            <main ref={container} className={styles.main}>
                <section id="hello">
                    <div className={styles.homeSection}>
                        <div className={styles.homeSectionContent}>
                            <Intro />
                        </div>
                    </div>
                    <div className={styles.bg}></div>
                </section>
                <section id="bio">
                    <div className={styles.homeSection}>
                        <div className={styles.homeSectionContent}>
                            <Bio />
                        </div>
                    </div>
                    <div className={styles.bg}></div>
                </section>
                <section id="education">
                    <div className={styles.homeSection}>
                        <div className={styles.homeSectionContent}>
                            <Education />
                        </div>
                    </div>
                    <div className={styles.bg}></div>
                </section>
                <section id="experience">
                    <div className={styles.homeSection}>
                        <div className={styles.homeSectionContent}>
                            <Experience />
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
            </main>
        </>
    );
}
