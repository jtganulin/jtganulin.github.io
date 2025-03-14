import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Avatar from "../components/Avatar";
import SkillsList from "../components/SkillsList";

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Me</title>
                <meta name="description" content="Learn more about Jeffrey Ganulin, a full-stack software engineer located in Atlanta, GA." />
                <link rel="canonical" href={import.meta.env.VITE_APP_DOMAIN as string + "/about"} />
            </Helmet>
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
                    I&apos;m Jeffrey Ganulin, a full-stack software engineer, located in Atlanta, GA, seeking
                    employment where my passion for technology and keen attention to detail can be used
                    to bring value to industry and society. I&apos;ve been passionate about technology and how
                    it can be used to solve problems and improve lives since I was young, and I&apos;m excited
                    to use my skills, experience, and unique perspectives to make a positive impact wherever I can.
                </p>
                <h2>Educational Journey</h2>
                <p>
                    My education includes a Master&apos;s degree in Software Engineering as well as a Bachelor&apos;s degree in Information Technology,
                    both from Kennesaw State University, and an Associate&apos;s degree in Computer Science from the University of North Georgia.
                    In addition to formal education, I&apos;ve learned extensively through self-led research, online courses, and documentation.
                    I&apos;m a quick learner especially when it comes to the field of technology, and I am always looking to learn new technologies and improve my skills.
                </p>
                <h2>Technical Background</h2>
                <p>
                    I have a strong background in web development, including front-end and back-end development, as well as design,
                    and have worked with a variety of technologies and frameworks, including React, Node.js, Express, PHP, Laravel, and more.
                    I also have experience with desktop application development using C# .NET, with WinForms and WPF frameworks, as well as
                    Java and Python. I&apos;ve dabbled in native mobile application development using Java for Android.
                    A key area of interest for me is in automation and productivity tools, and I&apos;ve used Python primarily for this purpose across multiple platforms and projects, as well as Bash and Perl.
                    You can view and search through my skills and proficiencies in the Skills section below.
                </p>
                <h2>Professional Skills</h2>
                <p>
                    I have successful project management and software engineering experience in both academic and professional settings, and I am comfortable
                    working in a team environment, as well as independently. I have excellent communication skills, and am capable of working with
                    both technical and non-technical stakeholders. Time management, quick learning, and organization are key strengths of mine, and I am always looking
                    for ways to improve my productivity and efficiency. I&apos;m also flexible and embrace changing requirements and environments with a positive attitude.
                    <br />
                    I&apos;m passionate about open-source software and have contributed to a number of projects on GitHub, both in terms of code and documentation.
                    You can view my projects and contributions on my <Link to="/projects">Projects</Link> page.
                    <br />
                    I am also an advocate for diversity and inclusion in the tech industry, and I am always looking to connect with others who share this passion.
                </p>
                <h2>Personal Interests</h2>
                <p>
                    Outside of academic and professional pursuits, I enjoy reading and writing, hiking, and video games, as well as photography. I also enjoy traveling and learning about different cultures, and their cuisines and languages. I&apos;m also a food enthusiast, and amateur chef and baker.
                    <br />
                    If you believe I&apos;d be a good fit for your team, or if you&apos;d like to connect, please feel free to reach out to me through my <Link to="/contact">Contact</Link> page.
                </p>
                <SkillsList showLegend showProficiency showYears showSearch />
            </div>
        </>
    );
}
