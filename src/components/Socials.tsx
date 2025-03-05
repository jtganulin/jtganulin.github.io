import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconName } from "@fortawesome/fontawesome-svg-core";
import styles from "../styles/Socials.module.css";

export default function Socials({ expanded = false }: { expanded?: boolean; }) {
    return (
        <div className={styles.socialsContainer}>
            <div>
                <a href="https://github.com/jtganulin" target="_blank" rel="noopener nofollow noreferrer" title="View my GitHub profile" className={styles.social}><FontAwesomeIcon icon={"fab fa-github" as IconName} /> {expanded && "GitHub"}</a>
            </div>
            <div>
                <a href="https://linkedin.com/in/jtganulin" target="_blank" rel="noopener nofollow noreferrer" title="View my LinkedIn profile" className={styles.social}><FontAwesomeIcon icon={"fab fa-linkedin" as IconName} /> {expanded && "LinkedIn"}</a>
            </div>
            <div>
                <a href="mailto:jganulin6@gmail.com" target="_blank" rel="noopener nofollow noreferrer" title="Send me an email" className={styles.social}><FontAwesomeIcon icon={"fa fa-envelope" as IconName} /> {expanded && "Email Me"}</a>
            </div>
            <div>
                <a href="/JeffreyGanulinResume.pdf" target="_blank" rel="noopener" title="View my resume" className={styles.social}>
                    Resume
                </a>
            </div>
        </div>
    );
}
