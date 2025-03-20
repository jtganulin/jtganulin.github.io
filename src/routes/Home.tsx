import { useRef } from 'react';
import { useHead, useLink } from "hoofd";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from '../styles/Home.module.css';

import HomeSection from "../components/HomeSection";
import Intro from '../views/Intro';
import Bio from '../views/Bio';
import Education from '../views/Education';
import Experience from '../views/Experience';
import SkillsList from '../components/SkillsList';

export default function Home() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        gsap.fromTo((containerRef.current).querySelector("." + styles.scrollToTop), {
            autoAlpha: 0,
        }, {
            autoAlpha: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: (containerRef.current).querySelector("section"),
                start: "bottom top",
                toggleActions: "play none none reverse"
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.vars.trigger === containerRef?.current) {
                    trigger.kill();
                }
            });
        };
    }, { scope: containerRef });

    useHead({
        title: "Home",
        metas: [
            { name: "description", content: "Welcome to my software engineering portfolio. Discover my background, education, experience, and a wide range of technical skills that drive my development work." },
        ]
    });

    useLink({
        rel: "canonical",
        href: import.meta.env.VITE_APP_DOMAIN as string + "/"
    });

    return (
        <main ref={containerRef}>
            <HomeSection
                id="hello"
                bgIndex={1}
                scrollBtnTarget="bio"
                scrollBtnLabel="Learn more about me"
            >
                <Intro />
            </HomeSection>
            <HomeSection
                id="bio"
                sectionTitle="About Me"
                bgIndex={2}
                scrollBtnTarget="education"
                scrollBtnLabel="View my academic background"
            >
                <Bio />
            </HomeSection>
            <HomeSection
                id="education"
                sectionTitle="Education"
                bgIndex={3}
                scrollBtnTarget="experience"
                scrollBtnLabel="Learn about my experience"
            >
                <Education />
            </HomeSection>
            <HomeSection
                id="experience"
                sectionTitle="Experience and Projects"
                bgIndex={4}
                scrollBtnTarget="skills"
                scrollBtnLabel="View my collection of technical and soft skills"
            >
                <Experience />
            </HomeSection>
            <HomeSection
                id="skills"
                bgIndex={5}
            >
                <SkillsList showSearch showLegend showProficiency />
            </HomeSection>
            <button
                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={styles.scrollToTop}
                aria-label="Scroll to top"
                type="button"
            >
                ↑ <span>Back to Top</span>
            </button>
        </main>
    );
}
