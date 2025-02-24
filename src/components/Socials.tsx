import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconName } from "@fortawesome/fontawesome-svg-core";

import styles from "../styles/Socials.module.css";

export default function Socials({ displayLocation = false, expanded = false }: { displayLocation?: boolean, expanded?: boolean; }) {
    return (
        <div className={styles.socialsContainer}>
            {displayLocation && (
                <div className={styles.location}>
                    <FontAwesomeIcon icon={"fa fa-map-pin" as IconName} color="red" /><span>&nbsp;Atlanta, GA</span>
                </div>
            )}
            <div className={styles.socials}>
                <div>
                    <a title="View my GitHub profile" href="https://github.com/jtganulin" className={styles.social} target="_blank" rel="noopener, noreferrer"><FontAwesomeIcon icon={"fab fa-github" as IconName} /> {expanded && "GitHub"}</a>
                </div>
                <div>
                    <a title="View my LinkedIn profile" href="https://linkedin.com/in/jtganulin" className={styles.social} target="_blank" rel="noopener, noreferrer"><FontAwesomeIcon icon={"fab fa-linkedin" as IconName} /> {expanded && "LinkedIn"}</a>
                </div>
                <div>
                    <a title="Send me an email" href="mailto:jganulin6@gmail.com" className={styles.social} rel="noreferrer, noindex, nofollow"><FontAwesomeIcon icon={"fa fa-envelope" as IconName} /> {expanded && "Email Me"}</a>
                </div>
            </div>
        </div>
    );
}
