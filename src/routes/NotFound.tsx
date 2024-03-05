import Helmet from "react-helmet";

export default function NotFound() {
    return (
        <>
        <Helmet>
            <title>Page Not Found</title>
            <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div>
            <h1>404</h1>
            <p>Page not found</p>
        </div>
        </>
    );
}
