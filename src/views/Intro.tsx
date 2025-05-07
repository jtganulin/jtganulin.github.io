import Socials from "../components/Socials";
import styles from "../styles/Intro.module.css";

export default function Intro() {
    return (
        <div className={styles.intro}>
            <div className={styles.heading}>
                <h1><em>Hello, I&apos;m</em></h1>
                <h2>Jeffrey Ganulin</h2>
                <h3><em>I am a...</em></h3> 
            </div>
            <div className={styles.activitiesWrapper}>
                <div>
                    <div className={styles.activity}>
                        Full-stack Software Engineer
                    </div>
                    <div className={styles.activity}>
                        Web Developer
                    </div>
                    <div className={styles.activity}>
                        Computer Support Specialist
                    </div>
                </div>
                <div>
                    <div className={styles.activity}>
                        Graphic Designer
                    </div>
                    <div className={styles.activity}>
                        Photographer
                    </div>
                    <div className={styles.activity}>
                        Amateur Chef and Baker
                    </div>
                </div>
            </div>
            <Socials />
        </div>
    );
}
