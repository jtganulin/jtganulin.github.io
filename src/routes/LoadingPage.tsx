import styles from "../styles/LoadingPage.module.css";

export default function LoadingPage() {
    // TODO: Add spinner and ease in/out animation
    return (
        <div className={styles.loading}>
            <h1>Loading...</h1>
            <p>Just a moment...</p>
        </div>
    );
}
