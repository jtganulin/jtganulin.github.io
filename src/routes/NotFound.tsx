import { Link } from "react-router-dom";
import { useHead } from "hoofd";

export default function NotFound() {
    useHead({
        title: "Page Not Found",
        metas: [
            { name: "robots", content: "noindex" },
        ]
    });

    return (
        <div className="constraint center">
            <h1 className="pageHeading">Page Not Found</h1>
            <h2>Error 404</h2>
            <p>Try checking the URL for any typos or head to the <Link to="/">homepage</Link>.</p>
            <p>To quickly view my resume, click <a href="/JeffreyGanulinResume.pdf" target="_blank" rel="noopener">here</a>.</p>
        </div>
    );
}
