import Helmet from "react-helmet";
import Socials from "../components/Socials";

// TODO: Fix formatting
export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact</title>
                <meta name="description" content="Get in touch with me to collaborate on a project or business venture." />
                <link rel="canonical" href={import.meta.env.VITE_APP_DOMAIN as string + "/contact"} />
            </Helmet>
            <div className="constraint">
                <h1 className="pageHeading">Contact</h1>
                <main>
                    <p className="pageHeading">
                        Looking to get in touch to collaborate on a project, or seeking a valuable contributor for your business venture?
                        <br />
                        Reach out to me on LinkedIn, GitHub, or by email using the buttons below.
                        <br />
                        I currently live in the northern Atlanta, GA area <em>(Timezone EST (UTC-5))</em>, and am open to remote work opportunities.
                        <br />
                        Thanks for your time and interest in viewing my portfolio!
                    </p>
                    <div className="center">
                        <Socials />
                    </div>
                </main>
            </div>
        </>
    );
}
