import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import type { iSkill } from "../assets/SkillData";
import { Gold, Silver, Bronze } from './Badge';
import styles from "../styles/SkillBadge.module.css";

export default function SkillBadge({ skill, showProficiency = true, showYears = false }: { skill: iSkill, showProficiency?: boolean, showYears?: boolean }) {
    return (
        <div key={skill?.name} className={styles.skill}>
            {showProficiency && 
                (skill?.proficiency === "Advanced" ? (
                    <Gold />
                ) : skill?.proficiency === "Intermediate" ? (
                    <Silver />
                ) : (
                    <Bronze />
                ))
            }
            {skill?.icon && <FontAwesomeIcon icon={skill?.icon as IconName} color={skill?.color} title={skill?.name} style={{ width: "1em", margin: "auto 0.25em" }} />}
            <span>{skill?.name}</span>
            {showYears && skill?.years && (
                <span>&nbsp;- {skill.years} {skill.years == 1 ? 'year' : 'years'}</span>
            )}
        </div>
    );
}
