import { useRef } from 'react';
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP,} from "@gsap/react";
import styles from '../styles/Home.module.css';

import HomeSection from "../components/HomeSection";
import Intro from '../views/Intro';
import Bio from '../views/Bio';
import Education from '../views/Education';
import Experience from '../views/Experience';
import SkillsList from '../components/SkillsList';

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // If the user prefers reduced animations, don't apply any to the home sections
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        gsap.registerPlugin(ScrollTrigger);

        interface VarsType {
            transformOrigin: string;
            scale: number;
            origin?: [number, number];
            xPercent?: number;
            yPercent?: number;
            duration?: number;
            ease?: string;
            overwrite?: "auto";
        }

        // This effect lets you zoom in on a particular spot on the target - you define the scale and the origin as an Array of x/y normalized values.
        // Like {scale: 3, origin: [0.25, 0.8]} will zoom in on the spot that's 25% from the left, and 80% from the top of the element/image.
        // It will return an animation that controls the xPercent, yPercent, and scale (as well as any other values you pass in, like a normal tween)
        // It won't let the edges collapse toward the center. It's best to put the element into a container that has overflow: hidden.
        gsap.registerEffect({
            name: "zoom",
            effect: (targets: gsap.TweenTarget, config: { scale: number; origin: [number, number]; }) => {
                const vars: VarsType = { transformOrigin: "0px 0px", ...config },
                    { scale, origin } = config,
                    clamp = gsap.utils.clamp(-100 * (scale - 1), 0);
                delete vars.origin;
                vars.xPercent = clamp((0.5 - origin[0] * scale) * 100);
                vars.yPercent = clamp((0.5 - origin[1] * scale) * 100);
                vars.overwrite = "auto";
                return gsap.to(targets, vars);
            },
            extendTimeline: true,
            defaults: { origin: [0.5, 0.5], scale: 2 }
        });

        // for each section, we define the zoom data here
        const zoomData = [
            { scale: 1.3, origin: [1, 0.15] },
            { scale: 1.2, origin: [0.45, 0.45] },
            { scale: 1.3, origin: [0.6, 0.5] },
            { scale: 1.3, origin: [0.5, 0.5] },
            { scale: 1.2, origin: [0.5, 0.25] }
        ];

        gsap.utils.toArray("section").forEach((section, idx) => {
            const sectionElement = section as HTMLElement;
            const zoom = zoomData[idx];

            ScrollTrigger.create({
                trigger: sectionElement,
                start: "top 25%",
                end: "bottom 10%",
                scrub: true,
                onToggle(self) {
                    if (self.isActive) { // When user enters forward or backward
                        const imgElement: HTMLElement | null = sectionElement.querySelector<HTMLElement>("." + styles.bgContainer + " img");
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                        gsap.effects.zoom(imgElement, {
                            scale: zoom.scale,
                            origin: zoom.origin,
                            duration: 2,
                            ease: "sine"
                        });
                    } else { // if user leaves the section
                        const imgElement: HTMLElement | null = sectionElement.querySelector<HTMLElement>("." + styles.bgContainer + " img");
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                        gsap.effects.zoom(imgElement, {
                            scale: 1,
                            origin: [0.5, 0.5],
                            duration: 1,
                            ease: "none"
                        });
                    }
                }
            });

            // Fade in the sections' (after the first) content as they come into view, and on reverse scroll
            if (idx > 0) {
                gsap.fromTo(sectionElement.querySelector("." + styles.homeSectionContent), {
                    autoAlpha: 0,
                    x: -50
                }, {
                    autoAlpha: 1,
                    x: 0,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: sectionElement,
                        start: "top 80%",
                        end: "bottom top",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        });

        // Scroll to Top button fade in/out
        gsap.fromTo((containerRef.current as unknown as Element).querySelector("." + styles.scrollToTop), {
            autoAlpha: 0,
        }, {
            autoAlpha: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                // When the user scrolls past the first section
                trigger: (containerRef.current as unknown as Element).querySelector("section"),
                start: "bottom top",
                toggleActions: "play none none reverse"
            }
        });

        return () => {
            // Clean up the scroll trigger on unmount; we only want to kill the Home scroll trigger
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.vars.trigger === containerRef?.current) {
                    trigger.kill();
                }
            });
        };
    }, { scope: containerRef });

    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Welcome to my software engineering portfolio. Discover my background, education, experience, and a wide range of technical skills that drive my development work." />
                <link rel="canonical" href={import.meta.env.VITE_APP_DOMAIN as string + "/"} />
            </Helmet>
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
                    title="Scroll to top"
                    type="button"
                >
                    ↑ <span>Back to Top</span>
                </button>
            </main>
        </>
    );
}
