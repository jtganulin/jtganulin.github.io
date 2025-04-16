export interface IProject {
    slug: string;
    title: string;
    subtitle?: string;
    type: "Academic" | "Personal" | "Professional";
    summary: string;
    description: string;
    accomplishments: string[];
    github?: string;
    url?: string;
    images?: string[];
    skills: string[];
}

const PROJECTS_DATA = [
    {
        slug: "VillageHours",
        title: "VillageHours",
        subtitle: "Non-profit Organization Management Platform",
        summary: "A platform for non-profit organization leaders and volunteers to manage their events, attendance, expenses, and more.",
        description: "VillageHours was designed to help non-profit organizations manage their events, attendance, expenses, and more. The platform allows organization leaders to create and manage events, and track employee/volunteer attendance and expenses. Volunteers can view and sign up for events, and track their own attendance and expenses. This system was developed using React, Chakra UI, Express/Node.js, and MySQL. VillageHours was developed as a group project for the 'Software Engineering Capstone' course at Kennesaw State University. Our group consisted of 5 members, and we followed Agile and Scrum methodologies to develop the application. We tracked project progress, tasks, and issues via Atlassian Trello. We followed test-driven development and performed unit and component tests using Jest and React Testing Library, and also used Cypress to design end-to-end/scenario tests.",
        accomplishments: [
            "Contributed with a team of 6 following Agile and Kanban methodologies to develop a full-stack web application using React, TypeScript, Chakra UI, React Query, Redux, Node.js, Express, and MySQL.",
            "Designed responsive UI layouts using Figma",
            "Implemented UI designs into React components with Chakra UI.",
            "Contributed to backend API development using Node.js, Express, and MySQL to store and retrieve relevant data.",
            "Facilitated communication and data exchange between front- and back-end using React Query and Redux.",
            "Performed unit, component, and E2E testing using Jest, React Testing Library, Supertest, Vitest, and Cypress E2E suites.",
            "Implemented CI/CD pipelines using GitHub Actions and Docker to deploy to Microsoft Azure.",
            "Collaborated with team members using Git and GitHub to manage codebase and resolve merge conflicts.",
            "Mentored and trained new team members on the codebase and development processes.",
            "Added and maintained documentation using JSDoc and Markdown.",
            "Created management and planning documents using Google Docs and Microsoft Word.",
            "Tracked project progress and issues using GitHub and Atlassian Trello.",
            "Aided in presenting the project to the client and stakeholders.",
            "Communicated with stakeholders and project sponsor to gather requirements and feedback."
        ],
        type: "Academic",
        url: "",
        github: "https://github.com/jtganulin/capstone",
        images: ["VillageHours1.webp", "VillageHours2.webp", "VillageHours3.webp", "VillageHours4.webp", "VillageHours5.webp", "VillageHours6.webp", "VillageHours7.webp", "VillageHours8.webp", "VillageHours9.webp", "VillageHours10.webp", "VillageHours11.webp",],
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Chakra UI", "React Query", "Redux", "Node.js", "Express", "SQL", "MySQL", "Git", "GitHub", "Docker", "Microsoft Azure", "Atlassian Trello", "Markdown", "Cypress", "Jest", "React Testing Library", "Supertest", "Vitest", "Figma", "JSDoc", "Google Docs", "Leadership", "Communication", "Teamwork", "Agile", "Kanban", "CI/CD", "Flexibility", "Adaptability", "Problem Solving", "Critical Thinking", "Mentoring", "Training", "Documentation", "Presentation", "Time Management", "Organization", "Attention to Detail", "Responsibility", "Accountability"],
    },
    {
        slug: "Intrepid",
        title: "Intrepid",
        subtitle: "Dating and chat app for outdoor adventurers",
        summary: "A dating app for outdoor enthusiasts to find their ideal adventuring partner, with multi-media chat capabilities.",
        description: "Intrepid is a prototype web app designed to connect outdoor adventurers and enthusiasts with their ideal partners. Users can create an account, set up a profile, and search for other users based on their preferences. Users can also view others' profiles and send them a message. Chat functionality supports text and image messages. Users can also connect their profile with their Instagram account to display their Instagram photos directly on their profile. Intrepid was developed as a group project for the 'Emerging Software Processes' course at Kennesaw State University. Our group consisted of 6 members, and we followed Agile and Scrum methodologies to develop the application.",
        accomplishments: [
            "Contributed with a team of 6 following Agile and Scrum methodologies to develop a full-stack web application using HTML, CSS, JavaScript, React, Material UI, Node.js, Express, and MongoDB.",
            "Designed responsive UI layouts using Figma and Adobe Photoshop.",
            "Implemented UI designs into React components with custom CSS and Material UI.",
            "Facilitated front-end authentication and state management using React Context and 'HttpOnly' cookie-backed secured JWTs.",
            "Designed backend API endpoints using Node.js, Express, and MongoDB to implement functional requirements.",
            "Implemented CI/CD pipelines using CircleCI to deploy to Heroku.",
            "Incorporated connection with Instagram API to retrieve user photos for use on Intrepid.",
            "Collaborated with team members using Git and GitHub to manage codebase and resolve merge conflicts.",
            "Added and maintained codebase documentation using JSDoc and Markdown.",
            "Tracked project progress, issues, and Scrum activities using GitHub and Atlassian Jira.",
            "Aided in presenting the project to the client and stakeholders.",
            "Performed unit and component tests using Jest and React Testing Library.",
        ],
        type: "Academic",
        url: "",
        github: "https://github.com/jtganulin/intrepid-swe6733",
        images: ["Intrepid1.webp", "Intrepid2.webp", "Intrepid3.webp", "Intrepid4.webp", "Intrepid5.webp"],
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Passport.js", "Git", "GitHub", "Heroku", "CircleCI", "Atlassian Jira", "Material UI",
            "Leadership", "Communication", "Teamwork", "Agile", "Scrum", "Flexibility", "Adaptability", "Problem Solving", "Critical Thinking", "Mentoring", "Training", "Documentation", "Presentation", "Time Management", "Organization", "Attention to Detail", "Responsibility", "Accountability", "REST APIs"],
    },
    {
        slug: "FiresideGaming",
        title: "Fireside Gaming",
        subtitle: "Matchmaking and social media platform for gamers",
        summary: "A social media platform for gamers to connect with others and discover new games.",
        description: "Fireside Gaming is a prototype web app that allows gamers to connect with others and discover new games. New users can create an account and profile, and add their favorite games to their profile. They can update their status to let others know what game they're playing and if they're available to connect. Users can discover new friends with similar interests and favorite games with a matchmaking algorithm. Once connected, friends can view each other's profiles and statuses. Fireside Gaming consists of a React with JavaScript frontend, and a Django (Python) backend, with SQLite used as a prototype database layer. Game information is provided by a third-party API and integrates with Fireside Gaming via a Node.js & Express middleware server. Fireside Gaming was developed as a group project for the 'Web Services Engineering' course at Kennesaw State University. Our group consisted of 4 members, and we followed Agile and Scrum methodologies to develop the application. We tracked project progress, tasks, and issues via Atlassian Jira. We followed test-driven development and performed unit and component tests using Jest and React Testing Library, and also used Cypress to design end-to-end/scenario tests.",
        accomplishments: [
            "Contributed with a team of 4 following Agile and Scrum methodologies to develop a full-stack web application using HTML, CSS, JavaScript, React, Python, Django, Node.js, Express, and SQLite.",
            "Designed responsive UI layouts, wireframes, and mockups using Figma.",
            "Implemented UI designs into React components with custom CSS.",
            "Facilitated front-end authentication using React Context and JWTs.",
            "Contributed to backend API development using Python and Django to facilitate data exchange between front- and back-end.",
            "Aided in the design and implementation of a Node.js and Express middleware to retrieve data from an external REST API.",
            "Devised a CI/CD pipeline using CircleCI to deploy to Heroku.",
            "Collaborated with team members using Git and GitHub to manage codebase and resolve merge conflicts.",
            "Added and maintained codebase documentation using JSDoc and Markdown.",
            "Tracked project progress, issues, and Scrum activities using GitHub and Atlassian Jira.",
            "Aided in presenting the project to the client and stakeholders.",
            "Performed unit and component tests using Jest and React Testing Library.",
            "Performed E2E testing using Cypress.",
        ],
        type: "Academic",
        url: "",
        github: "https://github.com/jtganulin/Team-5-Web-Services-Engineering",
        images: ["FiresideGaming1.webp", "FiresideGaming2.webp", "FiresideGaming3.webp", "FiresideGaming4.webp", "FiresideGaming5.webp",],
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "Python", "Django", "SQL", "SQLite", "Git", "GitHub", "Heroku", "REST APIs", "CircleCI", "Atlassian Jira", "Leadership", "Communication", "Teamwork", "Agile", "Scrum", "Kanban", "CI/CD", "Flexibility", "Adaptability", "Problem Solving", "Critical Thinking", "Mentoring", "Training", "Documentation", "Presentation", "Time Management", "Organization", "Attention to Detail", "Responsibility", "Accountability"],
    },
    {
        slug: "SPMS",
        title: "Software Project Management System",
        subtitle: "Project Management System for software companies",
        summary: "A project management system that allows software companies to manage their projects, requirements, teams, and time effectively.",
        description: "This web app, built using the MERN stack, is a project management system specifically for software companies and developers. It allows users to create an account, and create and manage projects. Project requirements can be added and modified, and are separated between functional and non-functional categories. Users can add tasks to projects, and assign tasks to other users. Tasks be marked as applying to one or more specific project requirements. Visualized reporting allows users and project management staff to view progress on their projects easily and intuitively, through graphs and charts. Chakra UI was used with React to implement the frontend for the system. SPMS was developed as a group project for the 'Software Project Planning and Management' course at Kennesaw State University. I led our group of 5 members, and we followed Agile and Scrum methodologies throughout the project. We tracked project progress, tasks, and issues via Atlassian Jira.",
        accomplishments: [
            "Led a group of 5 following Agile and Scrum methodologies to develop a full-stack web application using HTML, CSS, JavaScript, React, Chakra UI, Node.js, Express, and MongoDB.",
            "Performed PERT analysis to estimate project duration and resource requirements.",
            "Designed responsive UI mockups using Marvel.",
            "Implemented UI designs into React components with Chakra UI.",
            "Facilitated front-end authentication using React Context and cookie-backed JWTs.",
            "Contributed to backend API development using Node.js, Express, and MongoDB to store and retrieve relevant data.",
            "Collaborated with team members using Git and GitHub to manage codebase and resolve merge conflicts.",
            "Added and maintained codebase documentation using JSDoc and Markdown.",
            "Tracked project progress, issues, and Scrum activities using GitHub and Atlassian Jira.",
            "Performed unit and component tests using Jest and React Testing Library.",
            "Aided in presenting the project to the client and stakeholders.",
        ],
        type: "Academic",
        url: "",
        github: "https://github.com/jtganulin/swe6633-group2-pms",
        images: ["SPMS1.webp", "SPMS2.webp", "SPMS3.webp", "SPMS4.webp"],
        skills: ["HTML", "CSS", "JavaScript", "React", "Chakra UI", "Node.js", "Express", "MongoDB", "Git", "GitHub", "CircleCI", "Atlassian Jira", "Marvel",
            "Leadership", "Communication", "Teamwork", "Agile", "Scrum", "PERT Analysis", "Flexibility", "Adaptability", "Problem Solving", "Critical Thinking", "Mentoring", "Training", "Documentation", "Presentation", "Time Management", "Organization", "Attention to Detail", "Responsibility", "Accountability"],
    },
    {
        slug: "KitchenCompanion",
        title: "Kitchen Companion",
        subtitle: "Recipe Management and Kitchen Utility System",
        summary: "A recipe management and kitchen utility system.",
        description: "Kitchen Companion is a responsive web app designed with the MERN stack that makes it easy to discover and manage recipes, plan meals, and access easy-to-use kitchen timers and calculators. Users can create an account, and add and edit their own recipes. Recipes can be tagged with categories and cuisines, and can be searched and filtered by these tags. Users can also view and add to a shopping list of ingredients needed for their recipes. Integration with an external food information API means users can discover new recipes intuitively. Kitchen Companion was developed as a solo project for the 'Software Engineering' course at Kennesaw State University.",
        accomplishments: [
            "Planned, designed, and developed a full-stack web application using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
            "Designed responsive UI layouts using Adobe Photoshop.",
            "Implemented UI designs into React components with custom CSS.",
            "Facilitated front-end authentication using React Context and JWTs.",
            "Implemented backend API endpoints using Node.js and Express, to facilitate communication to and from MongoDB.",
            "Integrated with an external food information REST API to retrieve recipe data.",
        ],
        type: "Academic",
        url: "",
        github: "https://github.com/jtganulin/kitchen-companion",
        images: ["KitchenCompanion1.webp", "KitchenCompanion2.webp", "KitchenCompanion3.webp", "KitchenCompanion4.webp", "KitchenCompanion5.webp", "KitchenCompanion6.webp", "KitchenCompanion7.webp", "KitchenCompanion8.webp"],
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "JSDoc", "MongoDB", "Git", "GitHub", "Adobe Photoshop CS6", "REST APIs", "Problem Solving", "Critical Thinking", "Quick Learning", "Creativity", "Documentation", "Time Management", "Organization", "Attention to Detail", "Responsibility", "Flexibility", "Accountability"],
    },
    {
        slug: "FiveDiceFrenzy",
        title: "Five Dice Frenzy",
        subtitle: "A Yahtzee! clone for the web",
        summary: "A simple and fun Yahtzee! clone for the web.",
        description: "Five Dice Frenzy is a web-based clone of the classic dice game, Yahtzee! Players can roll dice, and score their rolls in various categories. This game was developed as a personal project so that my family, friends, and I can play one of our favorite games on the go. It was developed using HTML, CSS, JavaScript, and jQuery. The game is designed to be minimalistic and performant while remaining easy to use and intuitive, and responsive design means it can be played on desktop and mobile devices on a variety of browsers.",
        accomplishments: [
            "Designed and developed a web-based clone of the classic dice game, Yahtzee!, using HTML, CSS, JavaScript, and jQuery.",
            "Performed various iterations to ensure the game met all functional requirements and was easy to use and intuitive.",
            "Designed the game to be fully responsive and performant, and to be playable on desktop and mobile devices.",
            "Prioritized the game's cross-browser compatibility and performance."
        ],
        type: "Personal",
        url: "https://jgproductions.x10.bz/FiveDiceFrenzy/",
        github: "https://github.com/jtganulin/Five-Dice-Frenzy",
        images: [
            "FiveDiceFrenzy1.webp",
            "FiveDiceFrenzy2.webp",
            "FiveDiceFrenzy3.webp",
            "FiveDiceFrenzy4.webp",
            "FiveDiceFrenzy5.webp",
            "FiveDiceFrenzy6.webp",
        ],
        skills: ["HTML", "CSS", "JavaScript", "jQuery", "Git", "GitHub", "Problem Solving", "Critical Thinking", "Quick Learning", "Documentation", "Time Management", "Organization", "Attention to Detail", "Responsibility", "Flexibility", "Creativity", "Accountability"],
    },
    {
        slug: "MultiFileTextReplacer",
        title: "Multi-File Text Replacer",
        subtitle: "Replace text across multiple files simultaneously on Windows",
        summary: "Utility for Windows that allows replacement of a given string or regular expression pattern across multiple text files.",
        description: "For scenarios where you need to replace text (either via string input or regular expression pattern) throughout multiple separate text files, Multi-File Text Replacer is a utility for Windows that allows you to do just that. The utility is designed to be easy to use, simple, and efficient. Multi-File Text Replacer was developed as a personal project to solve a problem I encountered in my own work. The utility was developed using C# and WPF (with XAML). The utility aims to present relevant controls and information to the user in a clear and quick to grasp manner, and also emphasizes safety and reliability, with its ability to create backups of files before making changes.",
        accomplishments: [
            "Designed and developed a utility for Windows that allows replacement of a given string or regular expression pattern across multiple text files, using C# and WPF (with XAML).",
            "Designed the utility to be easy to use, simple, and efficient, and to present relevant controls and information to the user in a clear and quick to grasp manner.",
            "Emphasized safety and reliability, with the utility's ability to create backups of files before making changes.",
        ],
        type: "Personal",
        url: "",
        github: "https://github.com/jtganulin/multi-file-text-replacer",
        images: ["MultiFileTextReplacer1.webp", "MultiFileTextReplacer2.webp", "MultiFileTextReplacer3.webp"],
        skills: ["C#", "WPF", "XAML", "Git", "GitHub", "Regular Expressions", "Microsoft Visual Studio", "Windows", "Problem Solving", "Critical Thinking", "Quick Learning", "Documentation", "Time Management", "Organization", "Attention to Detail", "Responsibility", "Flexibility", "Creativity", "Accountability"],
    },
    {
        slug: "ImageCombiner",
        title: "Image Combiner",
        subtitle: "Combine 2 images into 1 on Windows",
        summary: "A utility for Windows PCs that allows the composition of multiple images into a single image, either horizontally or vertically.",
        description: "Image Combiner is a utility for Windows PCs that allows a user to combine two photos into a composite, either horizontally or vertically. The utility is designed to be easy to use, simple, and efficient. Image Combiner was developed as a personal project to solve a problem I encountered in my own work. The utility was developed using C# and WPF (with XAML), and uses ImageMagick.NET for image processing.",
        accomplishments: [
            "Designed and developed a utility for Windows PCs that allows the composition of multiple images into a single image, either horizontally or vertically, using C# and Visual Studio, .NET 6.0, and WinForms.",
            "Designed the utility to be easy to use, simple, and efficient.",
            "Used ImageMagick.NET for image processing.",
            "Tracked project progress and issues using Git and GitHub.",
            "Performed maintenance and patches to patch security vulnerabilities and improve performance."
        ],
        type: "Personal",
        url: "",
        github: "https://github.com/jtganulin/image-combiner",
        images: ["ImageCombiner1.webp", "ImageCombiner2.webp", "ImageCombiner3.webp", "ImageCombiner4.webp", "ImageCombiner5.webp"],
        skills: ["C#", "WinForms", "Git", "GitHub", "Microsoft Visual Studio", "Windows", "ImageMagick", "Problem Solving", "Critical Thinking", "Quick Learning", "Documentation", "Time Management", "Organization", "Attention to Detail", "Responsibility", "Flexibility", "Creativity", "Accountability"],
    },
    {
        slug: "PMOS",
        title: "PMO Management System",
        subtitle: "PMO and Contract Management System",
        summary: "Bachelor's Capstone Project - Platform for PMO and College Staff Contract Management.",
        description: "This system, created as part of a Bachelor's Capstone Project for the B.S. in IT Program at Kennesaw State University, allows school administration to easily manage contracts and projects. The system allows for the creation and management of contracts, and the management of project details, including project requirements, tasks, and deadlines. The system also allows for the management of project staff, and the tracking of project progress. The system was developed using HTML, CSS, JavaScript, PHP, and MySQL. The system was developed as a group project, and our group followed Agile and Scrum methodologies to develop the application.",
        accomplishments: [
            "Contributed with a team of 5 following Agile and Scrum methodologies to develop a full-stack web application using HTML, CSS, JavaScript, PHP, and MySQL.",
            "Designed responsive UI layouts using Figma.",
            "Implemented UI designs into HTML and CSS.",
            "Facilitated front-end authentication using PHP and MySQL.",
            "Contributed to backend API development using PHP and MySQL to facilitate data exchange between front- and back-end.",
            "Aided in presenting the project to the client and stakeholders.",
        ],
        type: "Academic",
        url: "",
        github: "",
        images: ["PMOS1.webp", "PMOS2.webp", "PMOS3.webp", "PMOS4.webp", "PMOS5.webp"],
        skills: ["HTML", "CSS", "JavaScript", "PHP", "Git", "GitHub", "Leadership", "Communication", "Teamwork", "Flexibility", "Adaptability", "Problem Solving", "Critical Thinking", "Mentoring", "Training", "Documentation", "Presentation", "Time Management", "Organization", "Attention to Detail", "Responsibility", "Accountability"],
    },
    {
        slug: "PythonImageScripts",
        title: "Image Processing Python Scripts",
        summary: "A collection of Python scripts for image processing. Includes scripts for resizing, scaling, converting, and compressing images.",
        description: "In order to facilitate the processing of images for various projects, I developed a collection of Python scripts. The scripts allow for the resizing, scaling, converting between formats, and compressing of images. The scripts were developed using Python, and use the Pillow and ImageMagick libraries for image manipulation. The scripts were developed as a personal project to solve a problem I encountered in my own work, greatly reducing the time otherwise required for these tasks.",
        accomplishments: [
            "Designed and developed a collection of Python scripts for image processing, using Python, Pillow, and ImageMagick.",
            "Designed the scripts to be easy to use and efficient, and to reduce the time required for image processing tasks.",
            "Performed maintenance and patches to patch security vulnerabilities and improve performance."
        ],
        type: "Professional",
        url: "",
        github: "",
        images: [],
        skills: ["Python", "Git", "GitHub", "Pillow", "ImageMagick", "Windows", "Problem Solving", "Critical Thinking", "Quick Learning", "Documentation", "Time Management", "Organization", "Attention to Detail", "Flexibility", "Creativity"],
    },
    {
        slug: "TheEntrywaySurgeon",
        title: "The Entryway Surgeon",
        summary: "Website for The Entryway Surgeon iron door installation and repair company",
        description: "This website was developed for The Entryway Surgeon, a company that specializes in the installation and repair of iron doors. The website was developed using HTML, CSS, JavaScript, jQuery, and PHP with Laravel. The website is fully responsive and can be viewed on desktop and mobile devices. The website features a gallery of the company's work, a contact form, and a user reviews page.",
        accomplishments: [
            "Designed and developed a website for The Entryway Surgeon, a company that specializes in the installation and repair of iron doors, using HTML, CSS, JavaScript, jQuery, PHP, and Laravel.",
            "Designed the website to be fully responsive and viewable on desktop and mobile devices.",
            "Designed the website to be easy to use and intuitive, and to emphasize the company's work using multimedia.",
            "Engineered a user review system to allow customers to leave their feedback for the company's services.",
            "Collaborated with the company owner to gather requirements and feedback for iterative development.",
            "Implemented an admin interface to allow company staff to manage user reviews and gallery images.",
            "Developed adjunct scripts using Python, and programs in C#, to process images for the gallery.",
        ],
        type: "Professional",
        url: "https://theirondoorspecialist.com/",
        github: "",
        images: [],
        skills: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "Laravel", "Python", "C#", "Communication", "Flexibility", "Adaptability", "Problem Solving", "Critical Thinking", "Quick Learning", "Documentation", "Presentation", "Time Management", "Organization", "Attention to Detail", "Responsibility", "Accountability"],
    },
    {
        slug: "Portfolio",
        title: "My Portfolio Website",
        summary: "My personal portfolio website, used to show my projects, skills, and experience.",
        description: "This portfolio website is intended serve as a digital 'resume' of sorts - showcasing my skills, education, projects, and experience relating to software engineering and development. The website was developed using HTML, CSS, JavaScript, React, and TypeScript. The website is fully responsive and can be viewed on desktop and mobile devices. From its inception, I intended for this site to capture the user's attention, and to be easy to use and intuitive while having a unique visual design. I've included visual flair and animations to make the site more engaging and memorable, but have ensured that the site remains performant and accessible.",
        accomplishments: [
            "Designed and developed a personal portfolio website using HTML, CSS, JavaScript, React, and TypeScript.",
            "Designed the website to be fully responsive and viewable on desktop and mobile devices.",
            "Designed the website to be easy to use and intuitive, and to emphasize my skills, education, and projects.",
            "Included visual flair and animations to make the site more engaging and memorable.",
            "Ensured the site remains performant and accessible.",
            "Designed UI mockups using Figma and Adobe Photoshop.",
            "Tracked project progress and issues using GitHub.",
        ],
        type: "Personal",
        url: "https://jtganulin.github.io/",
        github: "https://github.com/jtganulin/jtganulin.github.io",
        images: [],
        skills: ["HTML", "CSS", "JavaScript", "React", "GSAP", "TypeScript", "Python", "Git", "GitHub", "Figma", "Markdown", "Adobe Photoshop CS6", "Communication", "Flexibility", "Problem Solving", "Critical Thinking", "Quick Learning", "Documentation", "Presentation", "Time Management", "Organization", "Attention to Detail", "Responsibility", "Creativity", "Accountability"],
    },
] as IProject[];

export default PROJECTS_DATA;
