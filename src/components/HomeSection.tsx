import { memo, useCallback, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "../styles/Home.module.css";

const SectionScrollButton = memo(({ targetID, label }:
    {
        targetID: "bio" | "education" | "experience" | "skills";
        label: string;
    }
) => {
    const scroll = useCallback(() => {
        if (!targetID) return;

        document.getElementById(targetID)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, [targetID]);

    if (!targetID) return null;

    return (
        <div className={styles.sectionScrollButton}>
            <button
                onClick={scroll}
                type="button"
                aria-label={`Scroll to the ${targetID} section`}
            >
                {"↓ " + label}
            </button>
        </div>
    );
});

const HomeSection = ({ id, sectionTitle, bgIndex, scrollBtnTarget, scrollBtnLabel, children }: {
    id?: string;
    sectionTitle?: string;
    bgIndex: number;
    scrollBtnTarget?: "bio" | "education" | "experience" | "skills";
    scrollBtnLabel?: string;
    children: React.ReactNode;
}) => {
    const sectionRef = useRef<HTMLElement>(null);
    
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        if (!sectionRef.current) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // Zoom data for each section's image
        const zoomData: { scale: number; origin: [number, number] }[] = [
            { scale: 1.3, origin: [1, 0.15] },
            { scale: 1.2, origin: [0.45, 0.45] },
            { scale: 1.3, origin: [0.6, 0.5] },
            { scale: 1.3, origin: [0.5, 0.5] },
            { scale: 1.2, origin: [0.5, 0.25] }
        ];

        const zoom = zoomData[bgIndex - 1];
        const imgElement = sectionRef.current.querySelector<HTMLElement>(`.${styles.bgContainer} img`);

        if (!imgElement) return;

        interface ZoomEffectConfig {
            scale: number;
            origin: [number, number];
            duration?: number;
            ease?: string;
        }

        const zoomEffect = (target: HTMLElement, config: ZoomEffectConfig) => {
            const vars: gsap.TweenVars = { 
                transformOrigin: "0px 0px",
                xPercent: gsap.utils.clamp(-100 * (config.scale - 1), 0)((0.5 - config.origin[0] * config.scale) * 100),
                yPercent: gsap.utils.clamp(-100 * (config.scale - 1), 0)((0.5 - config.origin[1] * config.scale) * 100),
                scale: config.scale,
                duration: config.duration,
                ease: config.ease,
                overwrite: "auto"
            };
            return gsap.to(target, vars);
        };

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 25%",
            end: "bottom 10%",
            scrub: true,
            onToggle(self) {
                if (self.isActive) {
                    zoomEffect(imgElement, {
                        scale: zoom.scale,
                        origin: zoom.origin,
                        duration: 2,
                        ease: "sine"
                    });
                } else {
                    zoomEffect(imgElement, {
                        scale: 1,
                        origin: [0.5, 0.5],
                        duration: 1,
                        ease: "none"
                    });
                }
            }
        });

        // Fade in animation for sections after the first
        if (bgIndex - 1 > 0) {
            gsap.fromTo(sectionRef.current.querySelector(`.${styles.homeSectionContent}`), {
                autoAlpha: 0,
                x: -50
            }, {
                autoAlpha: 1,
                x: 0,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play none none reverse"
                }
            });
        }

    }, [bgIndex]);

    return (
        <section id={id} className="homeSectionContainer" ref={sectionRef}>
            <div className={styles.homeSection}>
                <div className={styles.homeSectionContent}>
                    {sectionTitle &&
                        <h2 className={styles.sectionTitle}>
                            {sectionTitle}
                        </h2>
                    }
                    {children}
                </div>
                {scrollBtnTarget && (
                    <SectionScrollButton
                        targetID={scrollBtnTarget}
                        label={scrollBtnLabel || "View More"}
                    />
                )}
            </div>
            {/* {showImage && ( */}
                <div className={styles.bgContainer}>
                    <img
                        src={`/images/Home/${bgIndex}.webp`}
                        alt={`Homepage image ${bgIndex}`}
                        width="1500"
                        height="2000"
                        loading={bgIndex === 0 ? "eager" : "lazy"}
                    />
                </div>
            {/* )} */}
        </section>
    );
};

export default memo(HomeSection);
