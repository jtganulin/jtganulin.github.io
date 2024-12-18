
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
        "proficiency": "Intermediate",
        "years": 5,
        "icon": "fa fa-database",
        "color": "gold"
    },
    {
        "type": "Databases",
        "name": "MariaDB",
        "proficiency": "Intermediate",
        "years": 5,
        "icon": "fa fa-database",
        "color": "orange"
    },
    {
        "type": "Databases",
        "name": "MongoDB",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-database",
        "color": "green"
    },
    {
        "type": "Databases",
        "name": "SQLite",
        "proficiency": "Intermediate",
        "years": 1,
        "icon": "fa fa-database",
        "color": "lightblue"
    },
    {
        "type": "Databases",
        "name": "PostgreSQL",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fa fa-database",
        "color": "blue"
    },
    {
        "type": "Databases",
        "name": "Microsoft SQL Server",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fa fa-database",
        "color": "yellow"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "React",
        "proficiency": "Advanced",
        "years": 2,
        "icon": "fab fa-react",
        "color": "cyan"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Node.js",
        "proficiency": "Advanced",
        "years": 2,
        "icon": "fab fa-node",
        "color": "green"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Express",
        "proficiency": "Advanced",
        "years": 2,
        "icon": "fab fa-node",
        "color": "white"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "jQuery",
        "proficiency": "Advanced",
        "years": 11,
        "icon": "fab fa-js",
        "color": "lightblue"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Laravel",
        "proficiency": "Intermediate",
        "years": 6,
        "icon": "fab fa-php",
        "color": "red"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Redux",
        "proficiency": "Intermediate",
        "years": 1,
        "icon": "fab fa-react",
        "color": "purple"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "jQuery UI",
        "proficiency": "Intermediate",
        "years": 8,
        "icon": "fab fa-js",
        "color": "lightblue"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Bootstrap",
        "proficiency": "Intermediate",
        "years": 3,
        "icon": "fab fa-bootstrap",
        "color": "blue"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "WinForms",
        "proficiency": "Intermediate",
        "years": 6,
        "icon": "fab fa-windows",
        "color": "lightyellow"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "WPF",
        "proficiency": "Intermediate",
        "years": 3,
        "icon": "fab fa-windows",
        "color": "lightyellow"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Cypress",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-cogs",
        "color": "#17202a"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Jest",
        "proficiency": "Intermediate",
        "years": 3,
        "icon": "fab fa-js",
        "color": "#99425b"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "React Testing Library",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fab fa-react",
        "color": "#61dafb"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "ImageMagick",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-image",
        "color": "#4a148c"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Axios",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-cloud",
        "color": "#009688"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "ESLint",
        "proficiency": "Intermediate",
        "years": 1,
        "icon": "fab fa-js",
        "color": "yellow"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Prettier",
        "proficiency": "Intermediate",
        "years": 1,
        "icon": "fa fa-broom",
        "color": "#5eb2b4"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Django",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fab fa-python",
        "color": "green"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Tailwind",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fab fa-css3-alt",
        "color": "blue"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Chakra UI",
        "proficiency": "Beginner",
        "years": 2,
        "icon": "fab fa-css3-alt",
        "color": "cyan"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "React Query",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fab fa-react",
        "color": "lightblue"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "JavaFX",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fab fa-java",
        "color": "red"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Swing",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fab fa-java",
        "color": "red"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Tkinter",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fab fa-python",
        "color": "green"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Supertest",
        "proficiency": "Beginner",
        "years": 2,
        "icon": "fa fa-cogs",
        "color": "#2c3e50"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Vitest",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fab fa-js",
        "color": "#646464"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "GSAP",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fa fa-sliders-h",
        "color": "#00695c"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Passport.js",
        "proficiency": "Beginner",
        "years": 2,
        "icon": "fa fa-passport",
        "color": "#8e44ad"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Material UI",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fab fa-react",
        "color": "#2196f3"
    },
    {
        "type": "Frameworks and Libraries",
        "name": "Pillow",
        "proficiency": "Beginner",
        "years": 2,
        "icon": "fa fa-image",
        "color": "#4a148c"
    },
    {
        "type": "Languages",
        "name": "JavaScript",
        "proficiency": "Advanced",
        "years": 12,
        "icon": "fab fa-js",
        "color": "yellow"
    },
    {
        "type": "Languages",
        "name": "HTML",
        "proficiency": "Advanced",
        "years": 13,
        "icon": "fab fa-html5",
        "color": "orange"
    },
    {
        "type": "Languages",
        "name": "CSS",
        "proficiency": "Advanced",
        "years": 13,
        "icon": "fab fa-css3-alt",
        "color": "blue"
    },
    {
        "type": "Languages",
        "name": "PHP",
        "proficiency": "Advanced",
        "years": 9,
        "icon": "fab fa-php",
        "color": "violet"
    },
    {
        "type": "Languages",
        "name": "Python",
        "proficiency": "Advanced",
        "years": 10,
        "icon": "fab fa-python",
        "color": "green"
    },
    {
        "type": "Languages",
        "name": "Regular Expressions",
        "proficiency": "Advanced",
        "years": 10,
        "icon": "fa fa-code",
        "color": "#2ecc71"
    },
    {
        "type": "Languages",
        "name": "TypeScript",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fab fa-js",
        "color": "yellow"
    },
    {
        "type": "Languages",
        "name": "SQL",
        "proficiency": "Intermediate",
        "years": 5,
        "icon": "fa fa-database",
        "color": "lightblue"
    },
    {
        "type": "Languages",
        "name": "Java",
        "proficiency": "Intermediate",
        "years": 10,
        "icon": "fab fa-java",
        "color": "red"
    },
    {
        "type": "Languages",
        "name": "C#",
        "proficiency": "Intermediate",
        "years": 9,
        "icon": "fa fa-code",
        "color": "teal"
    },
    {
        "type": "Languages",
        "name": "XML",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-code",
        "color": "white"
    },
    {
        "type": "Languages",
        "name": "Markdown",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fab fa-markdown",
        "color": "#083fa1"
    },
    {
        "type": "Languages",
        "name": "XAML",
        "proficiency": "Beginner",
        "years": 3,
        "icon": "fab fa-windows",
        "color": "lightyellow"
    },
    {
        "type": "Languages",
        "name": "YAML",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fa fa-code",
        "color": "white"
    },
    {
        "type": "Languages",
        "name": "C",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fa fa-code",
        "color": "darkblue"
    },
    {
        "type": "Languages",
        "name": "Perl",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fa fa-code",
        "color": "darkblue"
    },
    {
        "type": "Languages",
        "name": "Bash",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fa fa-terminal",
        "color": "lightgreen"
    },
    {
        "type": "Languages",
        "name": "French",
        "proficiency": "Beginner",
        "years": 4,
        "icon": "fa fa-passport",
        "color": "blue"
    },
    {
        "type": "Languages",
        "name": "Spanish",
        "proficiency": "Beginner",
        "years": 2,
        "icon": "fa fa-passport",
        "color": "yellow"
    },
    {
        "type": "Methodologies and Practices",
        "name": "Agile",
        "proficiency": "Advanced",
        "years": 3,
        "icon": "fa fa-tasks",
        "color": "#009688"
    },
    {
        "type": "Methodologies and Practices",
        "name": "Scrum",
        "proficiency": "Advanced",
        "years": 2,
        "icon": "fa fa-trophy",
        "color": "#3498db"
    },
    {
        "type": "Methodologies and Practices",
        "name": "Responsive Web Design",
        "proficiency": "Advanced",
        "years": 10,
        "icon": "fa fa-sliders-h",
        "color": "#4caf50"
    },
    {
        "type": "Methodologies and Practices",
        "name": "Requirements Engineering",
        "proficiency": "Advanced",
        "years": 5,
        "icon": "fa fa-book",
        "color": "#607d8b"
    },
    {
        "type": "Methodologies and Practices",
        "name": "Kanban",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-columns",
        "color": "#4caf50"
    },
    {
        "type": "Methodologies and Practices",
        "name": "PERT Analysis",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-chart-line",
        "color": "#f57c00"
    },
    {
        "type": "Methodologies and Practices",
        "name": "Test-Driven Development (TDD)",
        "proficiency": "Intermediate",
        "years": 3,
        "icon": "fa fa-check-square",
        "color": "#4caf50"
    },
    {
        "type": "Methodologies and Practices",
        "name": "Behavior-Driven Development (BDD)",
        "proficiency": "Intermediate",
        "years": 3,
        "icon": "fa fa-check-square",
        "color": "#c300ef"
    },
    {
        "type": "Methodologies and Practices",
        "name": "CI/CD",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-arrow-rotate-right",
        "color": "#607d8b"
    },
    {
        "type": "Methodologies and Practices",
        "name": "Unit Testing",
        "proficiency": "Intermediate",
        "years": 3,
        "icon": "fa fa-check-square",
        "color": "#4caf50"
    },
    {
        "type": "Methodologies and Practices",
        "name": "End-to-End Testing",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-check-square",
        "color": "#c300ef"
    },
    {
        "type": "Methodologies and Practices",
        "name": "SEO",
        "proficiency": "Intermediate",
        "years": 3,
        "icon": "fa fa-search",
        "color": "#c300ef"
    },
    {
        "type": "Methodologies and Practices",
        "name": "Integration Testing",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fa fa-check-square",
        "color": "#607d8b"
    },
    {
        "type": "Methodologies and Practices",
        "name": "Mutation Testing",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fa fa-check-square",
        "color": "#d0ff00"
    },
    {
        "type": "Methodologies and Practices",
        "name": "Web Accessibility",
        "proficiency": "Beginner",
        "years": 2,
        "icon": "fa fa-hand-holding-heart",
        "color": "#607d8b"
    },
    {
        "type": "Operating Systems",
        "name": "Windows",
        "proficiency": "Advanced",
        "years": 20,
        "icon": "fab fa-windows",
        "color": "white"
    },
    {
        "type": "Operating Systems",
        "name": "Linux",
        "proficiency": "Intermediate",
        "years": 5,
        "icon": "fab fa-linux",
        "color": "orange"
    },
    {
        "type": "Operating Systems",
        "name": "macOS",
        "proficiency": "Beginner",
        "years": 3,
        "icon": "fab fa-apple",
        "color": "white"
    },
    {
        "type": "Platforms",
        "name": "GitHub",
        "proficiency": "Advanced",
        "years": 5,
        "icon": "fab fa-github",
        "color": "purple"
    },
    {
        "type": "Platforms",
        "name": "Heroku",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-cloud",
        "color": "violet"
    },
    {
        "type": "Platforms",
        "name": "Figma",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fab fa-figma",
        "color": "white"
    },
    {
        "type": "Platforms",
        "name": "Atlassian Jira",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fab fa-jira",
        "color": "blue"
    },
    {
        "type": "Platforms",
        "name": "Atlassian Trello",
        "proficiency": "Intermediate",
        "years": 1,
        "icon": "fab fa-trello",
        "color": "blue"
    },
    {
        "type": "Platforms",
        "name": "Static Analysis",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-check-square",
        "color": "#4565f7"
    },
    {
        "type": "Platforms",
        "name": "Google Analytics",
        "proficiency": "Intermediate",
        "years": 3,
        "icon": "fa fa-chart-line",
        "color": "#d0ff00"
    },
    {
        "type": "Platforms",
        "name": "Google My Business",
        "proficiency": "Intermediate",
        "years": 3,
        "icon": "fa fa-chart-line",
        "color": "#4565f7"
    },
    {
        "type": "Platforms",
        "name": "Google Search Console",
        "proficiency": "Intermediate",
        "years": 3,
        "icon": "fa fa-chart-line",
        "color": "#4caf50"
    },
    {
        "type": "Platforms",
        "name": "Amazon Web Services",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fab fa-aws",
        "color": "orange"
    },
    {
        "type": "Platforms",
        "name": "Microsoft Azure",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fab fa-microsoft",
        "color": "cornflowerblue"
    },
    {
        "type": "Platforms",
        "name": "CircleCI",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fa fa-arrow-rotate-right",
        "color": "green"
    },
    {
        "type": "Platforms",
        "name": "WordPress",
        "proficiency": "Beginner",
        "years": 1,
        "icon": "fab fa-wordpress",
        "color": "blue"
    },
    {
        "type": "Soft Skills",
        "name": "Communication",
        "proficiency": "Advanced",
        "icon": "fa fa-comments",
        "color": "lightblue"
    },
    {
        "type": "Soft Skills",
        "name": "Teamwork",
        "proficiency": "Advanced",
        "icon": "fa fa-users",
        "color": "green"
    },
    {
        "type": "Soft Skills",
        "name": "Problem Solving",
        "proficiency": "Advanced",
        "icon": "fa fa-question-circle",
        "color": "red"
    },
    {
        "type": "Soft Skills",
        "name": "Time Management",
        "proficiency": "Advanced",
        "icon": "fa fa-hourglass",
        "color": "orange"
    },
    {
        "type": "Soft Skills",
        "name": "Organization",
        "proficiency": "Advanced",
        "icon": "fa fa-tasks",
        "color": "purple"
    },
    {
        "type": "Soft Skills",
        "name": "Critical Thinking",
        "proficiency": "Advanced",
        "icon": "fa fa-bolt",
        "color": "yellow"
    },
    {
        "type": "Soft Skills",
        "name": "Creativity",
        "proficiency": "Advanced",
        "icon": "fa fa-palette",
        "color": "lightgreen"
    },
    {
        "type": "Soft Skills",
        "name": "Adaptability",
        "proficiency": "Advanced",
        "icon": "fa fa-adjust",
        "color": "lightblue"
    },
    {
        "type": "Soft Skills",
        "name": "Self-Motivation",
        "proficiency": "Advanced",
        "icon": "fa fa-bolt",
        "color": "red"
    },
    {
        "type": "Soft Skills",
        "name": "Flexibility",
        "proficiency": "Advanced",
        "icon": "fa fa-adjust",
        "color": "orange"
    },
    {
        "type": "Soft Skills",
        "name": "Attention to Detail",
        "proficiency": "Advanced",
        "icon": "fa fa-search",
        "color": "purple"
    },
    {
        "type": "Soft Skills",
        "name": "Quick Learning",
        "proficiency": "Advanced",
        "icon": "fa fa-graduation-cap",
        "color": "#f39c12"
    },
    {
        "type": "Soft Skills",
        "name": "Work Ethic",
        "proficiency": "Advanced",
        "icon": "fa fa-user-tie",
        "color": "yellow"
    },
    {
        "type": "Soft Skills",
        "name": "Empathy",
        "proficiency": "Advanced",
        "icon": "fa fa-hand-holding-heart",
        "color": "pink"
    },
    {
        "type": "Soft Skills",
        "name": "Patience",
        "proficiency": "Advanced",
        "icon": "fa fa-hourglass",
        "color": "lightblue"
    },
    {
        "type": "Soft Skills",
        "name": "Confidence",
        "proficiency": "Advanced",
        "icon": "fa fa-user-tie",
        "color": "red"
    },
    {
        "type": "Soft Skills",
        "name": "Resilience",
        "proficiency": "Advanced",
        "icon": "fa fa-arrow-rotate-right",
        "color": "purple"
    },
    {
        "type": "Soft Skills",
        "name": "Integrity",
        "proficiency": "Advanced",
        "icon": "fa fa-user-secret",
        "color": "yellow"
    },
    {
        "type": "Soft Skills",
        "name": "Curiosity",
        "proficiency": "Advanced",
        "icon": "fa fa-question-circle",
        "color": "lightgreen"
    },
    {
        "type": "Soft Skills",
        "name": "Technical Writing",
        "proficiency": "Advanced",
        "icon": "fa fa-book",
        "color": "lightblue"
    },
    {
        "type": "Soft Skills",
        "name": "Mentoring",
        "proficiency": "Advanced",
        "years": 3,
        "icon": "fa fa-user-tie",
        "color": "#8e44ad"
    },
    {
        "type": "Soft Skills",
        "name": "Documentation",
        "proficiency": "Advanced",
        "years": 3,
        "icon": "fa fa-book",
        "color": "#34495e"
    },
    {
        "type": "Soft Skills",
        "name": "Responsibility",
        "proficiency": "Advanced",
        "icon": "fa fa-tasks",
        "color": "#e67e22"
    },
    {
        "type": "Soft Skills",
        "name": "Accountability",
        "proficiency": "Advanced",
        "icon": "fa fa-check-square",
        "color": "#27ae60"
    },
    {
        "type": "Soft Skills",
        "name": "Project Management",
        "proficiency": "Advanced",
        "years": 3,
        "icon": "fa fa-project-diagram",
        "color": "#2196f3"
    },
    {
        "type": "Soft Skills",
        "name": "Leadership",
        "proficiency": "Intermediate",
        "years": 5,
        "icon": "fa fa-users",
        "color": "gold"
    },
    {
        "type": "Soft Skills",
        "name": "Training",
        "proficiency": "Intermediate",
        "years": 1,
        "icon": "fa fa-chalkboard-teacher",
        "color": "#3498db"
    },
    {
        "type": "Soft Skills",
        "name": "Presentation",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-chalkboard-teacher",
        "color": "#e74c3c"
    },
    {
        "name": "Insomnia REST Client",
        "proficiency": "Advanced",
        "years": 5,
        "icon": "fa fa-moon",
        "color": "purple",
        "type": "Tools"
    },
    {
        "name": "VS Code",
        "proficiency": "Advanced",
        "years": 5,
        "icon": "fa fa-code",
        "color": "lightblue",
        "type": "Tools"
    },
    {
        "name": "Microsoft Office Suite",
        "proficiency": "Advanced",
        "years": 15,
        "icon": "fab fa-microsoft",
        "color": "gold",
        "type": "Tools"
    },
    {
        "type": "Tools",
        "name": "Google Docs",
        "proficiency": "Advanced",
        "years": 3,
        "icon": "fab fa-google",
        "color": "#4285f4"
    },
    {
        "type": "Tools",
        "name": "REST APIs",
        "proficiency": "Advanced",
        "years": 5,
        "icon": "fa fa-cloud",
        "color": "#4caf50"
    },
    {
        "name": "Git",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fab fa-git-alt",
        "color": "red",
        "type": "Tools"
    },
    {
        "name": "Postman",
        "proficiency": "Intermediate",
        "years": 1,
        "icon": "fa fa-cloud",
        "color": "purple",
        "type": "Tools"
    },
    {
        "name": "Microsoft Visual Studio",
        "proficiency": "Intermediate",
        "years": 6,
        "icon": "fa fa-code",
        "color": "purple",
        "type": "Tools"
    },
    {
        "name": "PyCharm",
        "proficiency": "Intermediate",
        "years": 3,
        "icon": "fab fa-python",
        "color": "green",
        "type": "Tools"
    },
    {
        "name": "IntelliJ IDEA",
        "proficiency": "Intermediate",
        "years": 5,
        "icon": "fab fa-java",
        "color": "teal",
        "type": "Tools"
    },
    {
        "name": "Eclipse",
        "proficiency": "Intermediate",
        "years": 4,
        "icon": "fab fa-java",
        "color": "purple",
        "type": "Tools"
    },
    {
        "name": "Adobe Photoshop CS6",
        "proficiency": "Intermediate",
        "years": 5,
        "icon": "fa fa-image",
        "color": "blue",
        "type": "Tools"
    },
    {
        "type": "Tools",
        "name": "JSDoc",
        "proficiency": "Intermediate",
        "years": 2,
        "icon": "fa fa-file-code",
        "color": "#f0db4f"
    },
    {
        "type": "Tools",
        "name": "Marvel",
        "proficiency": "Intermediate",
        "years": 1,
        "icon": "fa fa-trophy",
        "color": "#ef6c00"
    },
    {
        "name": "Android Studio",
        "proficiency": "Beginner",
        "years": 2,
        "icon": "fab fa-android",
        "color": "lightgreen",
        "type": "Tools"
    },
    {
        "type": "Tools",
        "name": "Docker",
        "proficiency": "Beginner",
        "years": 3,
        "icon": "fa fa-database",
        "color": "#0db7ed"
    }
];

export default SKILLS_DATA;
