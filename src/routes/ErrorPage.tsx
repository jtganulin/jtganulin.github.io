import { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../providers/ThemeProvider";
import styles from "../styles/ErrorPage.module.css";

export default function ErrorPage({ error }: { error: Error }) {
    const { theme } = useContext(ThemeContext);
    
    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <main className={styles.errorPage} data-theme={theme}>
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
