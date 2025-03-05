import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
    return (
        <>
        <Helmet>
            <title>Page Not Found</title>
            <meta name="robots" content="noindex" />
        </Helmet>
        <div className="center">
            <h1 className="pageHeading">Page Not Found - Error 404</h1>
                <p>Try checking the URL for any typos or head to the <Link to="/">homepage</Link>.</p>
                <p>To quickly view my resume, click <a href="/JeffreyGanulinResume.pdf" target="_blank" rel="noopener">here</a>.</p>
        </div>
        </>
    );
}
