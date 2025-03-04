import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import type { ISkill } from "../assets/SkillData";
import { Gold, Silver, Bronze } from './Badge';
import styles from "../styles/SkillBadge.module.css";

function SkillBadge({ skill, showProficiency = true, showYears = false }: { skill: ISkill, showProficiency?: boolean, showYears?: boolean }) {
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
            {skill?.icon && (
                <FontAwesomeIcon
                    icon={skill?.icon as IconName}
                    color={skill?.color}
                    title={skill?.name}
                    className={styles.skillIcon}
                />
            )}
            <span>
                {skill?.name}
                {showYears && skill?.years && (
                    <>&nbsp;- {skill.years} {skill.years == 1 ? 'year' : 'years'}</>
                )}
            </span>
        </div>
    );
}

export default memo(SkillBadge);
