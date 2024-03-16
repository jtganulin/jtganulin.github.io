import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import styles from "../styles/LoadingPage.module.css";

export default function LoadingPage() {
    // TODO: Add spinner and ease in/out animation

    const { theme } = useContext(ThemeContext);
    return (
        <div className={styles.loading} data-theme={theme}>
            <h1>Loading...</h1>
            <p>Just a moment...</p>
        </div>
    );
}
