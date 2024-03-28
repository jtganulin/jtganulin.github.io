import { useEffect, useState } from 'react';
import SKILLS_DATA from '../assets/SkillData';
import type { iSkill } from '../assets/SkillData';
import SkillBadge from './SkillBadge';
import styles from '../styles/SkillsList.module.css';
import { Gold, Silver, Bronze } from './Badge';

interface iSkillsListProps {
    displayCategories?: string[],
    showSearch?: boolean,
    showLegend?: boolean,
    showYears?: boolean,
    showProficiency?: boolean
}

export default function SkillsList({
    displayCategories = ["Soft Skills", "Methodologies and Practices", "Languages", "Frameworks and Libraries", "Platforms", "Tools", "Databases", "Operating Systems"],
    showSearch = false,
    showLegend = false,
    showYears = false,
    showProficiency = false
}: iSkillsListProps) {
    const [search, setSearch] = useState<string>("");
    const [filteredSkills, setFilteredSkills] = useState<iSkill[]>(SKILLS_DATA);

    useEffect(() => {
        if (showSearch) {
            if (search.trim() !== "") {
                setFilteredSkills(SKILLS_DATA.filter(skill => skill.name.toLowerCase().includes(search.toLowerCase())));
            } else {
                setFilteredSkills(SKILLS_DATA);
            }
        } else {
            setFilteredSkills(SKILLS_DATA);
        }
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
                    <span title="I have proven experience with this technology and can use it numerous situations"><Gold /> Proficient</span> &bull; <span title="I am comfortable with this technology but I'm not yet an expert with it"><Silver /> Competent</span> &bull; <span title="I know basic concepts about this technology but have not used it extensively"><Bronze /> Familiar</span>
                </div>
            )}
            {showYears && (
                <div><em>Years of experience include personal, academic, and professional experience.</em></div>
            )}
            <div>
                {displayCategories?.map(category => {
                    if (filteredSkills.filter(skill => skill.type === category).length > 0) {
                        return (
                            <div key={category}>
                                <h3>{category}</h3>
                                <div className={styles.categoryContainer}>
                                    {filteredSkills.filter(skill => skill.type === category).map(skill => (
                                        <SkillBadge key={skill?.name} skill={skill} showProficiency={showProficiency} showYears={showYears} />
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
