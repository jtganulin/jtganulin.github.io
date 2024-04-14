import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
    return (
        <>
        <Helmet>
            <title>Page Not Found</title>
            <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="center">
            <h1 className="pageHeading">Error 404</h1>
            <p>Page not found. Try checking the URL for any typos or head to the <Link to="/">homepage.</Link></p>
        </div>
        </>
    );
}
