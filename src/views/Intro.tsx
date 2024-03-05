import Socials from "../components/Socials";
import styles from "../styles/Intro.module.css";

const ACTIVITIES = [
    "Full-stack Software Engineer",
    "Web Developer",
    "Software and Hardware Support Specialist",
    "Graphic Designer",
    "Food Enthusiast",
    "Amateur Chef and Baker",
    "Photographer",
];

export default function Intro({ refer }: { refer?: React.RefObject<HTMLDivElement> }) {
    return (
        <div className="homeSection" ref={refer}>
            <div className={"homeSectionContent " + styles.heading}>
                <h2><em>Hello, I&apos;m</em></h2>
                <h1>Jeffrey Ganulin</h1>
                <Socials displayLocation={true} />
                <div className={styles.activities}>
                    <div className={styles.activitiesWrapper}>
                        {ACTIVITIES.map((activity, index) => (
                            <div className="activity" key={index}>{activity}</div>
                        ))}
                    </div>
                </div>
                {/* TODO: Resume; Move to About Me section below? */}
                <p>
                    View my resume <a href="#" target="_blank" rel="noreferrer">here</a> or scroll down to learn more about me.
                </p>
            </div>
        </div>
    );
}
