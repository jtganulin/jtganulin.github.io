import { useRef } from 'react';
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from '../styles/Home.module.css';

import Intro from '../views/Intro';
import Bio from '../views/Bio';
import Education from '../views/Education';
import Experience from '../views/Experience';
import SkillsList from '../components/SkillsList';

const Background = ({ index }: { index: number; }) => {
    return (
        <div className={styles.bgContainer}>
            <img src={`/images/Home/${index}.jpg`} alt={`Homepage background ${index}`}
                width="1500" height="2000"
                style={{
                    maxWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    aspectRatio: "1.333333333"
                }}
            />
        </div>
    );
};

const HomeSection = ({ id, bgIndex, children }: { id?: string; bgIndex: number; children: React.ReactNode; }) => {
    return (
        <section id={id}>
            <div className={styles.homeSection}>
                <div className={styles.homeSectionContent}>
                    {children}
                </div>
            </div>
            <Background index={bgIndex} />
        </section>
    );
};

export default function Home() {
    const containerRef = useRef(null);

    useGSAP(() => {
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
                        gsap.effects.zoom(imgElement, {
                            scale: zoom.scale,
                            origin: zoom.origin,
                            duration: 2,
                            ease: "power1.inOut"
                        });
                    } else { // if user leaves the section
                        const imgElement: HTMLElement | null = sectionElement.querySelector<HTMLElement>("." + styles.bgContainer + " img");
                        gsap.effects.zoom(imgElement, {
                            scale: 1,
                            origin: [0.5, 0.5],
                            duration: 1,
                            ease: "power1.inOut"
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
                <link rel="canonical" href={import.meta.env.VITE_APP_DOMAIN as string + "/"} />
            </Helmet>
            <main ref={containerRef} className={styles.main}>
                <HomeSection id="hello" bgIndex={1}>
                    <Intro />
                    <p>View my resume <a href="/#/about?resume">here</a> or scroll down to learn more about me.</p>
                </HomeSection>
                <HomeSection id="bio" bgIndex={2}>
                    <Bio />
                    <p><em>Scroll further to view my education, experience, and skills.</em></p>
                </HomeSection>
                <HomeSection id="education" bgIndex={3}>
                    <Education />
                    <p><em>Scroll further to view my experience and skills.</em></p>
                </HomeSection>
                <HomeSection id="experience" bgIndex={4}>
                    <Experience />
                    <p><em>Scroll further to view my technical and soft skills.</em></p>
                </HomeSection>
                <HomeSection id="skills" bgIndex={5}>
                    <h2>Skills</h2>
                    <p>Click on a skill to view more information.</p>
                    {/* TODO: Fix warping of background image when searching */}

                    <SkillsList showSearch showLegend showProficiency /* showYears */ />
                </HomeSection>
                <div>
                    <button
                        onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className={styles.scrollToTop}
                        aria-label="Scroll to Top"
                    >
                        ↑ <span>Back to Top</span>
                    </button>
                </div>
            </main>
        </>
    );
}
