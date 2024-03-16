import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconName } from "@fortawesome/fontawesome-svg-core";

import styles from "../styles/Socials.module.css";

export default function Socials({ displayLocation = false }: { displayLocation?: boolean }) {
    return (
        <div className={styles.socialsContainer}>
            {displayLocation && (
                <div className={styles.contact}>
                    <FontAwesomeIcon icon={"fa fa-map-pin" as IconName} color="red" /><span>&nbsp;Atlanta, GA</span>
                </div>
            )}
            <div className={styles.socials}>
                {/* <div> */}
                    <a title="View my GitHub profile" href="https://github.com/jtganulin" className={styles.social} target="_blank" rel="noopener, noreferrer"><FontAwesomeIcon icon={"fab fa-github" as IconName} /></a>
                    <a title="View my LinkedIn profile" href="https://linkedin.com/in/jtganulin" className={styles.social} target="_blank" rel="noopener, noreferrer"><FontAwesomeIcon icon={"fab fa-linkedin" as IconName} /></a>
                    {/*<a title="View my Twitter profile" href="#" className={styles.social} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={"fab fa-twitter" as 
                    <a title="View my Instagram profile" href="#" className={styles.social} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={"fab fa-instagram" as IconName} /></a>
                    <a title="View my Facebook profile" href="#" className={styles.social} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={"fab fa-facebook" as IconName} /></a> */}
                    <a title="Send me an email" href="mailto:jganulin6@gmail.com" className={styles.social} rel="noreferrer, noindex, nofollow"><FontAwesomeIcon icon={"fa fa-envelope" as IconName} /></a>
                {/* </div> */}
                {/* <a title="View my YouTube profile" href="#" className={styles.social} target="_blank"><FontAwesomeIcon icon={"fab fa-youtube" as IconName} /></a>
                <a title="View my Discord profile" href="#" className={styles.social} target="_blank"><FontAwesomeIcon icon={"fab fa-discord" as IconName} /></a>
                <a title="View my Steam profile" href="#" className={styles.social} target="_blank"><FontAwesomeIcon icon={"fab fa-steam" as IconName} /></a> */}
            </div>
        </div>
    );
}
