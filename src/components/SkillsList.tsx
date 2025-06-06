import { memo, useMemo, useState } from 'react';
import SKILLS_DATA from '../assets/SkillData';
import type { ISkill } from '../assets/SkillData';
import SkillBadge from './SkillBadge';
import styles from '../styles/SkillsList.module.css';
import { Gold, Silver, Bronze } from './Badge';

interface ISkillsListProps {
    displayCategories?: string[],
    showSearch?: boolean,
    showLegend?: boolean,
    showYears?: boolean,
    showProficiency?: boolean
}

function SkillsList({
    displayCategories = ["Soft Skills", "Methodologies and Practices", "Languages", "Frameworks and Libraries", "Platforms", "Tools", "Databases", "Operating Systems"],
    showSearch = false,
    showLegend = false,
    showYears = false,
    showProficiency = false
}: ISkillsListProps) {
    const [search, setSearch] = useState<string>("");
    const filteredSkills = useMemo(() => {
        if (!showSearch) return SKILLS_DATA;
        if (search.trim() === "") return SKILLS_DATA;
        return SKILLS_DATA.filter((skill: ISkill) =>
            skill.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, showSearch]);

    return (
        <div className={styles.skillsContainer}>
            <h2>My Skills</h2>
            {showSearch && (
                <div className={styles.searchContainer}>
                    <input type="text" placeholder="Search my skills..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={() => setSearch("")}>Clear</button>
                </div>
            )}
            {showLegend && (
                <div className={styles.legend}>
                    <span title="I have proven experience with this skill and can use it in numerous scenarios"><Gold /> Advanced</span> &bull; 
                    <span title="I am comfortable with this skill but have more learning to do before full mastery"><Silver /> Intermediate</span> &bull; 
                    <span title="I know basic concepts about this skill and I'm learning more to become proficient"><Bronze /> Beginner</span>
                </div>
            )}
            {showYears && (
                <p><em>Years of experience include personal, academic, and professional experience.</em></p>
            )}
            <div className={styles.skillsList}>
                {displayCategories?.map(category => {
                    if (filteredSkills.filter(skill => skill.type === category).length > 0) {
                        return (
                            <div key={category}>
                                <h3>{category}</h3>
                                <div className={styles.categoryContainer}>
                                    {filteredSkills.filter(skill => skill.type === category).map(skill => (
                                        <SkillBadge 
                                            key={skill?.name}
                                            skill={skill} 
                                            showProficiency={showProficiency} 
                                            showYears={showYears}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default memo(SkillsList);
