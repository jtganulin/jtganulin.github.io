import { Link } from "react-router-dom";

export default function ErrorPage({ error, resetErrorBoundary } : { error: Error, resetErrorBoundary: () => void }) {
    return (
        <>
            <h1 className="pageHeading">Something went wrong</h1>
            <p>
                An error has occurred, try refreshing the page or head to the <Link to="/">home page</Link> to start over.
            </p>
            <pre>Error: {error?.message}</pre>
        </>
    );
}
