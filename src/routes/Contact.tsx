import Helmet from "react-helmet";
import Socials from "../components/Socials";

// TODO: Fix formatting
export default function Contact() {
    return (
        <>
            <Helmet title="Contact" />
            <h1 className="pageHeading">Contact</h1>
            <main>
                <p className="pageHeading">
                    Looking to get in touch to collaborate on a project, or seeking a valuable contributor for your business venture?
                    <br />
                    Reach out to me via any of the following social media platforms, or by <a href="mailto:jganulin6@gmail.com">email</a>.
                </p>
                <div className="center">
                    <Socials displayLocation />
                </div>
            </main>
        </>
    );
}
