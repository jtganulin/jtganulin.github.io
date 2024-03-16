import { Link } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css";
import { Helmet } from "react-helmet";

export default function ErrorPage({ error }: { error: Error }) {
    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <main className={styles.errorPage}>
                <h1 className="pageHeading">Something went wrong</h1>
                <p>
                    An error has occurred, whose details are below.
                    <br />
                    If refreshing the page doesn&apos;t work, you can head to the <Link to="/">home page</Link> or try again later.
                </p>
                <pre>{error?.stack ?? error?.message ?? "An unknown error occurred."}</pre>
            </main>
        </>
    );
}
