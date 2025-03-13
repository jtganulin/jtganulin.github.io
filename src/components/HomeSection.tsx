import { memo, useCallback } from "react";
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
    return (
        <section id={id} className="homeSectionContainer">
            <div className={styles.homeSection}>
                <div className={styles.homeSectionContent}>
                    {sectionTitle &&
                        <h1 className={styles.sectionTitle}>
                            {sectionTitle}
                        </h1>
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
            <div className={styles.bgContainer}>
                <img src={`/images/Home/${bgIndex}.jpg`} alt={`Homepage background ${bgIndex}`}
                    width="1500" height="2000" loading="lazy"
                />
            </div>
        </section>
    );
};

export default memo(HomeSection);
