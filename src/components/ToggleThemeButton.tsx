import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/ToggleThemeButton.module.css';

export default function ToggleThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className={styles.toggleThemeButton}
            onClick={() => toggleTheme()}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <FontAwesomeIcon icon={faSun} />
            ) : (
                <FontAwesomeIcon icon={faMoon} />
            ) }
        </button>
    );
}
