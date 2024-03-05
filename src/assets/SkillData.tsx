export interface iSkill {
    type: string,
    name: string,
    proficiency: string,
    years?: number,
    icon: string,
    color: string
}

const SKILLS_DATA: iSkill[] = [
    {
        "type": "Databases",
        "name": "MySQL",
        "proficiency": "Proficient",
        "years": 5,
        "icon": "fa fa-database",
        "color": "gold"
    },
    {
        "type": "Databases",
        "name": "MariaDB",
        "proficiency": "Proficient",
        "years": 5,
        "icon": "fa fa-database",
        "color": "orange"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "React",
        "proficiency": "Proficient",
        "years": 2,
        "icon": "fab fa-react",
        "color": "cyan"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Node.js",
        "proficiency": "Proficient",
        "years": 2,
        "icon": "fab fa-node",
        "color": "green"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Express",
        "proficiency": "Proficient",
        "years": 2,
        "icon": "fab fa-node",
        "color": "white"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "jQuery",
        "proficiency": "Proficient",
        "years": 11,
        "icon": "fab fa-js",
        "color": "lightblue"
    },
    {
        "type": "Languages",
        "name": "JavaScript",
        "proficiency": "Proficient",
        "years": 12,
        "icon": "fab fa-js",
        "color": "yellow"
    },
    {
        "type": "Languages",
        "name": "HTML",
        "proficiency": "Proficient",
        "years": 13,
        "icon": "fab fa-html5",
        "color": "orange"
    },
    {
        "type": "Languages",
        "name": "CSS",
        "proficiency": "Proficient",
        "years": 12.5,
        "icon": "fab fa-css3-alt",
        "color": "blue"
    },
    {
        "type": "Languages",
        "name": "PHP",
        "proficiency": "Proficient",
        "years": 9,
        "icon": "fab fa-php",
        "color": "violet"
    },
    {
        "type": "Languages",
        "name": "Python",
        "proficiency": "Proficient",
        "years": 10,
        "icon": "fab fa-python",
        "color": "green"
    },
    {
        "type": "Operating Systems",
        "name": "Windows",
        "proficiency": "Proficient",
        "years": 20,
        "icon": "fab fa-windows",
        "color": "white"
    },
    {
        "type": "Platforms",
        "name": "GitHub",
        "proficiency": "Proficient",
        "years": 5,
        "icon": "fab fa-github",
        "color": "purple"
    },
    {
        "type": "Soft Skills",
        "name": "Leadership",
        "proficiency": "Proficient",
        "years": 5,
        "icon": "fa fa-users",
        "color": "gold"
    },
    {
        "type": "Soft Skills",
        "name": "Communication",
        "proficiency": "Proficient",
        "icon": "fa fa-comments",
        "color": "lightblue"
    },
    {
        "type": "Soft Skills",
        "name": "Teamwork",
        "proficiency": "Proficient",
        "icon": "fa fa-users",
        "color": "green"
    },
    {
        "type": "Soft Skills",
        "name": "Problem Solving",
        "proficiency": "Proficient",
        "icon": "fa fa-question-circle",
        "color": "red"
    },
    {
        "type": "Soft Skills",
        "name": "Time Management",
        "proficiency": "Proficient",
        "icon": "fa fa-hourglass",
        "color": "orange"
    },
    {
        "type": "Soft Skills",
        "name": "Organization",
        "proficiency": "Proficient",
        "icon": "fa fa-tasks",
        "color": "purple"
    },
    {
        "type": "Soft Skills",
        "name": "Critical Thinking",
        "proficiency": "Proficient",
        "icon": "fa fa-bolt",
        "color": "yellow"
    },
    {
        "type": "Soft Skills",
        "name": "Creativity",
        "proficiency": "Proficient",
        "icon": "fa fa-palette",
        "color": "lightgreen"
    },
    {
        "type": "Soft Skills",
        "name": "Adaptability",
        "proficiency": "Proficient",
        "icon": "fa fa-adjust",
        "color": "lightblue"
    },
    {
        "type": "Soft Skills",
        "name": "Self-Motivation",
        "proficiency": "Proficient",
        "icon": "fa fa-bolt",
        "color": "red"
    },
    {
        "type": "Soft Skills",
        "name": "Flexibility",
        "proficiency": "Proficient",
        "icon": "fa fa-adjust",
        "color": "orange"
    },
    {
        "type": "Soft Skills",
        "name": "Attention to Detail",
        "proficiency": "Proficient",
        "icon": "fa fa-search",
        "color": "purple"
    },
    {
        "type": "Soft Skills",
        "name": "Work Ethic",
        "proficiency": "Proficient",
        "icon": "fa fa-user-tie",
        "color": "yellow"
    },
    {
        "type": "Soft Skills",
        "name": "Empathy",
        "proficiency": "Proficient",
        "icon": "fa fa-hand-holding-heart",
        "color": "pink"
    },
    {
        "type": "Soft Skills",
        "name": "Patience",
        "proficiency": "Proficient",
        "icon": "fa fa-hourglass",
        "color": "lightblue"
    },
    {
        "type": "Soft Skills",
        "name": "Confidence",
        "proficiency": "Proficient",
        "icon": "fa fa-user-tie",
        "color": "red"
    },
    {
        "type": "Soft Skills",
        "name": "Resilience",
        "proficiency": "Proficient",
        "icon": "fa fa-arrow-rotate-right",
        "color": "purple"
    },
    {
        "type": "Soft Skills",
        "name": "Integrity",
        "proficiency": "Proficient",
        "icon": "fa fa-user-secret",
        "color": "yellow"
    },
    {
        "type": "Soft Skills",
        "name": "Curiosity",
        "proficiency": "Proficient",
        "icon": "fa fa-question-circle",
        "color": "lightgreen"
    },
    {
        "type": "Soft Skills",
        "name": "Technical Writing",
        "proficiency": "Proficient",
        "icon": "fa fa-book",
        "color": "lightblue"
    },
    {
        "name": "Insomnia REST Client",
        "proficiency": "Proficient",
        "years": 5,
        "icon": "fa fa-moon",
        "color": "purple",
        "type": "Tools"
    },
    {
        "name": "VS Code",
        "proficiency": "Proficient",
        "years": 5,
        "icon": "fa fa-code",
        "color": "lightblue",
        "type": "Tools"
    },
    {
        "name": "Microsoft Office Suite",
        "proficiency": "Proficient",
        "years": 15,
        "icon": "fab fa-microsoft",
        "color": "gold",
        "type": "Tools"
    },
    {
        "type": "Databases",
        "name": "MongoDB",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-database",
        "color": "green"
    },
    {
        "type": "Databases",
        "name": "SQLite",
        "proficiency": "Competent",
        "years": 1,
        "icon": "fa fa-database",
        "color": "lightblue"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Laravel",
        "proficiency": "Competent",
        "years": 6,
        "icon": "fab fa-php",
        "color": "red"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Redux",
        "proficiency": "Competent",
        "years": 1,
        "icon": "fab fa-react",
        "color": "purple",
    },
    {
        "type": "Frameworks and Libraries",
        "name": "jQuery UI",
        "proficiency": "Competent",
        "years": 10,
        "icon": "fab fa-js",
        "color": "lightblue"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Bootstrap",
        "proficiency": "Competent",
        "years": 3,
        "icon": "fab fa-bootstrap",
        "color": "blue"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "WinForms",
        "proficiency": "Competent",
        "years": 6,
        "icon": "fab fa-windows",
        "color": "lightyellow"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "WPF (with XAML)",
        "proficiency": "Competent",
        "years": 3,
        "icon": "fab fa-windows",
        "color": "lightyellow"
    },
    {
        "type": "Languages",
        "name": "TypeScript",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fab fa-js",
        "color": "yellow"
    },
    {
        "type": "Languages",
        "name": "SQL",
        "proficiency": "Competent",
        "years": 5,
        "icon": "fa fa-database",
        "color": "lightblue"
    },
    {
        "type": "Languages",
        "name": "Java",
        "proficiency": "Competent",
        "years": 10,
        "icon": "fab fa-java",
        "color": "red"
    },
    {
        "type": "Languages",
        "name": "C#",
        "proficiency": "Competent",
        "years": 9,
        "icon": "fa fa-code",
        "color": "teal"
    },
    {
        "type": "Languages",
        "name": "XML",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-code",
        "color": "white"
    },
    {
        "type": "Operating Systems",
        "name": "Linux",
        "proficiency": "Competent",
        "years": 5,
        "icon": "fab fa-linux",
        "color": "orange"
    },
    {
        "type": "Platforms",
        "name": "Heroku",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-cloud",
        "color": "violet"
    },
    {
        "type": "Platforms",
        "name": "Figma",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fab fa-figma",
        "color": "white"
    },
    {
        "type": "Platforms",
        "name": "Atlassian Jira",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fab fa-jira",
        "color": "blue"
    },
    {
        "type": "Platforms",
        "name": "Atlassian Trello",
        "proficiency": "Competent",
        "years": 1,
        "icon": "fab fa-trello",
        "color": "blue"
    },
    {
        "name": "Git",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fab fa-git-alt",
        "color": "red",
        "type": "Tools"
    },
    {
        "name": "Postman",
        "proficiency": "Competent",
        "years": 1,
        "icon": "fa fa-cloud",
        "color": "purple",
        "type": "Tools"
    },
    {
        "name": "Microsoft Visual Studio",
        "proficiency": "Competent",
        "years": 6,
        "icon": "fa fa-code",
        "color": "purple",
        "type": "Tools"
    },
    {
        "name": "PyCharm",
        "proficiency": "Competent",
        "years": 3,
        "icon": "fab fa-python",
        "color": "green",
        "type": "Tools"
    },
    {
        "name": "IntelliJ IDEA",
        "proficiency": "Competent",
        "years": 5,
        "icon": "fab fa-java",
        "color": "teal",
        "type": "Tools"
    },
    {
        "name": "Eclipse",
        "proficiency": "Competent",
        "years": 4,
        "icon": "fab fa-java",
        "color": "purple",
        "type": "Tools"
    },
    {
        "name": "Adobe Photoshop CS6",
        "proficiency": "Competent",
        "years": 5,
        "icon": "fa fa-image",
        "color": "blue",
        "type": "Tools"
    },
    {
        "type": "Databases",
        "name": "PostgreSQL",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fa fa-database",
        "color": "blue"
    },
    {
        "type": "Databases",
        "name": "Microsoft SQL Server",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fa fa-database",
        "color": "yellow"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Django",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fab fa-python",
        "color": "green"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Tailwind",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fab fa-css3-alt",
        "color": "blue"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Chakra UI",
        "proficiency": "Familiar",
        "years": 2,
        "icon": "fab fa-css3-alt",
        "color": "cyan"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "React Query",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fab fa-react",
        "color": "lightblue"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "JavaFX",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fab fa-java",
        "color": "red"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Swing",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fab fa-java",
        "color": "red"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Tkinter",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fab fa-python",
        "color": "green"
    },
    {
        "type": "Languages",
        "name": "C",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fa fa-code",
        "color": "darkblue"
    },
    {
        "type": "Languages",
        "name": "Perl",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fa fa-code",
        "color": "darkblue"
    },
    {
        "type": "Languages",
        "name": "Bash",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fa fa-terminal",
        "color": "lightgreen"
    },
    {
        "type": "Languages",
        "name": "French",
        "proficiency": "Familiar",
        "years": 4,
        "icon": "fa fa-passport",
        "color": "blue"
    },
    {
        "type": "Languages",
        "name": "Spanish",
        "proficiency": "Familiar",
        "years": 2,
        "icon": "fa fa-passport",
        "color": "yellow"
    },
    {
        "type": "Operating Systems",
        "name": "macOS",
        "proficiency": "Familiar",
        "years": 3,
        "icon": "fab fa-apple",
        "color": "white"
    },
    {
        "type": "Platforms",
        "name": "Amazon Web Services",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fab fa-aws",
        "color": "orange"
    },
    {
        "type": "Platforms",
        "name": "Microsoft Azure",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fab fa-microsoft",
        "color": "cornflowerblue"
    },
    {
        "type": "Platforms",
        "name": "CircleCI",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fa fa-arrow-rotate-right",
        "color": "green"
    },
    {
        "type": "Platforms",
        "name": "WordPress",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fab fa-wordpress",
        "color": "blue"
    },
    {
        "name": "Android Studio",
        "proficiency": "Familiar",
        "years": 2,
        "icon": "fab fa-android",
        "color": "lightgreen",
        "type": "Tools"
    },
    {
        "type": "Tools",
        "name": "Docker",
        "proficiency": "Proficient",
        "years": 3,
        "icon": "fa fa-database",
        "color": "#0db7ed"
    },
    {
        "type": "Languages",
        "name": "Markdown",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fab fa-markdown",
        "color": "#083fa1"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Cypress",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-cogs",
        "color": "#17202a"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Jest",
        "proficiency": "Proficient",
        "years": 3,
        "icon": "fab fa-js",
        "color": "#99425b"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "React Testing Library",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fab fa-react",
        "color": "#61dafb"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Supertest",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-cogs",
        "color": "#2c3e50"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Vitest",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fab fa-js",
        "color": "#646464"
    },
    {
        "type": "Tools",
        "name": "JSDoc",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-file-code",
        "color": "#f0db4f"
    },
    {
        "type": "Tools",
        "name": "Google Docs",
        "proficiency": "Proficient",
        "years": 3,
        "icon": "fab fa-google",
        "color": "#4285f4"
    },
    {
        "type": "Soft Skills",
        "name": "Agile",
        "proficiency": "Proficient",
        "years": 3,
        "icon": "fa fa-tasks",
        "color": "#009688"
    },
    {
        "type": "Soft Skills",
        "name": "Kanban",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-columns",
        "color": "#4caf50"
    },
    {
        "type": "Tools",
        "name": "CI/CD",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-arrow-rotate-right",
        "color": "#607d8b"
    },
    {
        "type": "Soft Skills",
        "name": "Mentoring",
        "proficiency": "Proficient",
        "years": 3,
        "icon": "fa fa-user-tie",
        "color": "#8e44ad"
    },
    {
        "type": "Soft Skills",
        "name": "Training",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fa fa-chalkboard-teacher",
        "color": "#3498db"
    },
    {
        "type": "Soft Skills",
        "name": "Documentation",
        "proficiency": "Proficient",
        "years": 3,
        "icon": "fa fa-book",
        "color": "#34495e"
    },
    {
        "type": "Soft Skills",
        "name": "Presentation",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-chalkboard-teacher",
        "color": "#e74c3c"
    },
    {
        "type": "Soft Skills",
        "name": "Responsibility",
        "proficiency": "Proficient",
        "years": 3,
        "icon": "fa fa-tasks",
        "color": "#e67e22"
    },
    {
        "type": "Soft Skills",
        "name": "Accountability",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-check-square",
        "color": "#27ae60"
    },
    {
        "type": "Soft Skills",
        "name": "Scrum",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-trophy",
        "color": "#3498db"
    },
    {
        "type": "Languages",
        "name": "Regular Expressions",
        "proficiency": "Proficient",
        "years": 10,
        "icon": "fa fa-code",
        "color": "#2ecc71"
    },
    {
        "type": "Tools",
        "name": "ImageMagick",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-image",
        "color": "#4a148c"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "GSAP",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fa fa-sliders-h",
        "color": "#00695c"
    },
    {
        "type": "Tools",
        "name": "Marvel",
        "proficiency": "Competent",
        "years": 1,
        "icon": "fa fa-trophy",
        "color": "#ef6c00"
    },
    {
        "type": "Soft Skills",
        "name": "PERT Analysis",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-chart-line",
        "color": "#f57c00"
    },
    {
        "type": "Tools",
        "name": "REST APIs",
        "proficiency": "Proficient",
        "years": 5,
        "icon": "fa fa-cloud",
        "color": "#4caf50"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Passport.js",
        "proficiency": "Familiar",
        "years": 2,
        "icon": "fa fa-passport",
        "color": "#8e44ad"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Material UI",
        "proficiency": "Familiar",
        "years": 1,
        "icon": "fab fa-react",
        "color": "#2196f3"
    },
    {
        "type": "Soft Skills",
        "name": "Project Management",
        "proficiency": "Proficient",
        "years": 3,
        "icon": "fa fa-project-diagram",
        "color": "#2196f3"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Pillow",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-image",
        "color": "#4a148c"
    },
    {
        "type": "Tools",
        "name": "Axios",
        "proficiency": "Competent",
        "years": 2,
        "icon": "fa fa-cloud",
        "color": "#009688"
    }
];

export default SKILLS_DATA;
