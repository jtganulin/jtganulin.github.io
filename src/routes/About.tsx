import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SkillsList from "../components/SkillsList";

export default function About() {
    return (
        <>
            <Helmet title="About" />
            <h1 className="pageHeading">About Me</h1>
            {/* TODO: Picture */}
            {/* TODO: Break these into sections (Motivation, Values, Background, etc.) */}
            <main>
                <p>
                    I&apos;m Jeffrey Ganulin, a full-stack software engineer located in Atlanta, GA seeking
                    full-time employment anywhere my passion for technology and keen attention to detail can be used
                    to bring value to industry and society.
                </p>
                <p>
                    My education includes a Master&apos;s degree in Software Engineering and a Bachelor&apos;s degree in Information Technology from Kennesaw State University,
                    and an Associate&apos;s degree in Computer Science from the University of North Georgia, as well as self-led learning through online courses and tutorials.
                </p>
                <p>
                    I have a strong background in web development, including front-end and back-end development, as well as design,
                    and have worked with a variety of technologies and frameworks, including React, Node.js, Express, PHP, Laravel, and more.
                    I also have experience with desktop application development using C# .NET, with WinForms and WPF frameworks, as well as
                    Java and Python. I&apos;ve dabbled in native mobile application development using Java for Android.
                    A key area of interest for me is in automation and productivity tools,
                    and I&apos;ve used Python primarily for this purpose across multiple platforms and projects. You can view and search through
                    my skills and proficiencies in the Skills section below.
                    <br />
                    You can view my projects and contributions on my <Link to="/projects">Projects</Link> page.
                </p>    
                <p>
                    I have successful leadership and project management experience in both academic and professional settings, and I am comfortable
                    working in a team environment, as well as independently. I have excellent communication skills, and am capable of working with
                    both technical and non-technical stakeholders. Time management, quick learning, and organization are key strengths of mine, and I am always looking
                    for ways to improve my productivity and efficiency. I&apos;m flexible and embrace changing requirements and environments with a positive attitude.
                </p>
                <p>
                    I am a highly motivated and self-driven individual, and I am always looking to learn new technologies and improve my skills.
                    I&apos;m also passionate about contributing to open-source projects where I can through code and documentation.
                </p>
                <p>
                    I am also an advocate for diversity and inclusion in the tech industry, and I am always looking to connect with others who share this passion.

                    If you believe I&apos;d be a good fit for your team, or if you&apos;d like to connect, please feel free to reach out to me through my <Link to="/contact">Contact</Link> page.
                </p>
                <SkillsList showLegend showProficiency showYears showSearch />
            </main>
        </>
    );
}
