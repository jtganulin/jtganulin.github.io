import { useState } from 'react';
import type { ChangeEvent } from 'react';
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

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value;
        setSearch(searchText);
        
        if (showSearch) {
            if (searchText.trim() !== "") {
                setFilteredSkills(SKILLS_DATA.filter(skill => skill.name.toLowerCase().includes(searchText.toLowerCase())));
            } else {
                setFilteredSkills(SKILLS_DATA);
            }
        }
    };

    return (
        <div className={styles.skillsContainer}>
            <h2>My Skills</h2>
            {showSearch && (
                <div className={styles.searchContainer}>
                    <input type="text" placeholder="Search my skills..." value={search} onChange={handleSearchChange} />
                    <button onClick={() => setSearch("")}>Clear</button>
                </div>
            )}
            {showLegend && (
                <div className={styles.legend}>
                    <Gold /> Proficient &bull; <Silver /> Competent &bull; <Bronze /> Familiar
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