import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import SkillsList from "../components/SkillsList";
import styles from "../styles/About.module.css";

export default function About() {
    // If the query string has "resume," show the resume modal
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    
    if (query.has("resume")) {
        showResume();
    }

    function showResume(e?: React.MouseEvent<HTMLButtonElement>) {
        e?.preventDefault();
        window.open("/JeffreyGanulinResume.pdf", "_blank");
    }

    return (
        <>
            <Helmet>
                <title>About Me</title>
                <meta name="description" content="Learn more about Jeffrey Ganulin, a full-stack software engineer located in Atlanta, GA." />
                <link rel="canonical" href={import.meta.env.VITE_APP_DOMAIN as string + "/about"} />
            </Helmet>
            <div className="constraint">
                <h1 className="pageHeading">About Me</h1>
                {/* TODO: Picture */}
                <main>
                    <div className="center">
                        <button onClick={(e) => showResume(e)} className={styles.resumeButton}>View my Resume</button>
                    </div>
                    <h4>Summary</h4>
                    <p>
                        I&apos;m Jeffrey Ganulin, a full-stack software engineer, located in Atlanta, GA, seeking
                        employment where my passion for technology and keen attention to detail can be used
                        to bring value to industry and society.
                    </p>
                    <h4>Educational Journey</h4>
                    <p>
                        My education includes a Master&apos;s degree in Software Engineering and a Bachelor&apos;s degree in Information Technology from Kennesaw State University, and an Associate&apos;s degree in Computer Science from the University of North Georgia.
                        In addition to formal education, I&apos;ve enjoyed self-led learning through online courses and tutorials.
                        I&apos;m a quick learner especially when it comes to the field of technology, and I am always looking to learn new technologies and improve my skills.
                    </p>
                    <h4>Technical Background</h4>
                    <p>
                        I have a strong background in web development, including front-end and back-end development, as well as design,
                        and have worked with a variety of technologies and frameworks, including React, Node.js, Express, PHP, Laravel, and more.
                        I also have experience with desktop application development using C# .NET, with WinForms and WPF frameworks, as well as
                        Java and Python. I&apos;ve dabbled in native mobile application development using Java for Android.
                        A key area of interest for me is in automation and productivity tools, and I&apos;ve used Python primarily for this purpose across multiple platforms and projects, as well as Bash and Perl.
                        You can view and search through my skills and proficiencies in the Skills section below.
                    </p>
                    <h4>Professional Skills</h4>
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
                    <h4>Personal Interests</h4>
                    <p>
                        Outside of academic and professional pursuits, I enjoy reading and writing, hiking, and video games, as well as photography. I also enjoy traveling and learning about different cultures, and their cuisines and languages. I&apos;m also a food enthusiast, and amateur chef and baker.
                        <br />
                        If you believe I&apos;d be a good fit for your team, or if you&apos;d like to connect, please feel free to reach out to me through my <Link to="/contact">Contact</Link> page.
                    </p>
                    <SkillsList showLegend showProficiency showYears showSearch />
                </main>
            </div>
        </>
    );
}
