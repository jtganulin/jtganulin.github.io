import { useHead } from "hoofd";
import Socials from "../components/Socials";

export default function Contact() {
    useHead({
        title: "Contact Me",
        metas: [
            { name: "description", content: "Get in touch with me to collaborate on a project or business venture." },
        ]
    });

    return (
        <div className="constraint">
            <h1 className="pageHeading">Contact Me</h1>
            <main>
                <p>
                    Looking to get in touch to collaborate on a project, or seeking a valuable contributor for your business venture? I&apos;m always interested in hearing about exciting projects where my unique skills and passion for technology can add value, so feel free to reach out to me on LinkedIn, GitHub, or by email using the buttons below.
                </p>
                <p>
                    I currently live in the northern Atlanta, GA area <em>(Timezone EST: UTC-5)</em>, and am open to remote work opportunities.
                </p>
                <p>
                    Thanks for your time and interest in viewing my portfolio!
                </p>
                <Socials expanded />
            </main>
        </div>
    );
}
