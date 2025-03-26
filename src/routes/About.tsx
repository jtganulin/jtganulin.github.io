import { Link } from "react-router-dom";
import { useHead } from "hoofd";
import Avatar from "../components/Avatar";
import SkillsList from "../components/SkillsList";

export default function About() {
    useHead({
        title: "About Me",
        metas: [
            { name: "description", content: "Learn more about Jeffrey Ganulin, a full-stack software engineer located in Atlanta, GA." },
        ]
    });
    
    return (
        <div className="constraint">
            <h1 className="pageHeading">About Me</h1>
            <div className="center">
                <Avatar height="200" width="200" style={{
                    marginBottom: "1rem",
                }} />
                <a href="/JeffreyGanulinResume.pdf" target="_blank" rel="noopener" title="View my resume">
                    <button type="button">
                        View My Resume
                    </button>
                </a>
            </div>
            <h2>Summary</h2>
            <p>
                I&apos;m Jeffrey Ganulin, a full-stack software engineer based in Atlanta, GA, passionate about leveraging technology to solve problems and create meaningful impact.
                From a young age, I&apos;ve been fascinated by how technology can improve lives, and I&apos;m eager to apply my skills, experience, and unique perspectives to bring value to industry and society.
            </p>
            <h2>Educational Background</h2>
            <p>
                Before my formal education in computer science and software engineering, I developed a foundation in programming and web development through self-study and online resources, which fueled my passion for technology.
                I went on to earn a Master&apos;s degree in Software Engineering and a Bachelor&apos;s degree in Information Technology from Kennesaw State University, as well as an Associate&apos;s degree in Computer Science from the University of North Georgia.
                Beyond formal education, I continuously expand my knowledge through self-led research, online courses, and hands-on experience. As a quick learner, I&apos;m always exploring new technologies and refining my skill set.
            </p>
            <h2>Technical Background</h2>
            <p>
                I have extensive experience in full-stack web development and have built a variety of web applications across industries like tech, finance, gaming, and education.
                I&apos;ve worked with a wide range of technologies, including front-end and back-end languages, frameworks, libraries, and databases.
                On the front-end, I primarily use React, Tailwind CSS, JavaScript, and TypeScript, as well as HTML5 and CSS3, to build responsive and user-friendly interfaces. 
                On the back-end, I&apos;m most proficient with Node.js and Express, and PHP and Laravel stacks, along with databases like MySQL and MongoDB. 
                By leveraging these technologies together, I design and implement scalable and extensible APIs and robust data models that efficiently handle business logic and data processing.
                With expertise across both front-end and back-end development, I excel at manifesting complex project requirements into functional and efficient web applications.
                <br /><br />
                Outside web development, I have experience in desktop application development using C# (.NET with WinForms and WPF), as well as Java and Python.
                One of my key interests is in automation and productivity tools, and I frequently use Python and C# to automate tasks and optimize workflows across various projects.
                <br /><br />
                I&apos;m also familiar with cloud computing and deployment, having worked with AWS, Heroku, and Microsoft Azure, and I&apos;m in the process of gaining further knowledge on these platforms.
                I have a solid understanding of DevOps practices, including CI/CD pipelines, the benefits of virtualization, and containerization with Docker, which help me streamline development and deployment processes.
                My experience with version control systems like Git and platforms like GitHub allows me to collaborate effectively with other developers and contribute to open-source projects.
                <br /><br />
                My long-standing interest in computers and tech in general has also led me to become proficient in hardware and software troubleshooting, configuration, and maintenance across a variety of scenarios.
                My ability to diagnose and resolve issues across multiple fronts while communicating effectively with users of varied technical knowledge has proven invaluable in both personal and professional settings.
                <br /><br />
                You can explore my full list of skills and proficiencies in the <a onClick={(e) => { e.preventDefault(); document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }); }}>Skills</a> section below.
            </p>
            <h2>Professional Skills</h2>
            <p>
                With experience in both academic and professional settings, I have successfully managed and contributed to projects across various domains. I thrive in independent and team-based environments, excelling at collaboration with both technical and non-technical stakeholders.
                The strong attention to detail, thoroughness, and desire for optimization I&apos;ve refined ensure that tasks are completed efficiently and to a high standard.
                <br /><br />
                I am highly adaptable, embracing changing requirements and environments with a flexible problem-solving mindset. My ability to learn quickly allows me to stay ahead in the ever-evolving tech landscape and to exceed client expectations, as I continuously refine my skills and improve my workflows.
                You can explore my work further on the <Link to="/projects">Projects</Link> page.
            </p>
            <h2>Personal Interests</h2>
            <p>
                Outside of technology, I&apos;m passionate about reading, writing, hiking, photography, and gaming. I also love traveling, exploring different cultures, and learning about their cuisines and languages. As a food enthusiast, I enjoy experimenting as an amateur chef and baker.
                <br />
                If you&apos;d like to connect or believe I&apos;d be a great fit for your team or business venture, feel free to reach out via my <Link to="/contact">Contact</Link> page.
            </p>
            <div id="skills">
                <SkillsList showLegend showProficiency showYears showSearch />
            </div>
        </div>
    );
}
