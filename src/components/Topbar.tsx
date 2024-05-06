import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../styles/Topbar.module.css';
import ToggleThemeButton from './ToggleThemeButton';
import Avatar from './Avatar';

// Page friendly name: [path, caption]
const ROUTES: Record<string, [string, string]> = {
    "Home": ["/", "Go to the homepage"],
    "Projects": ["/projects", "See my work and projects"],
    "About Me": ["/about", "Learn more about me"],
    "Contact Me": ["/contact", "Get in touch with me"]
};

export default function Topbar({ refer }: { refer?: React.RefObject<HTMLDivElement>; }) {
    const navigate = useNavigate();

    const Links = ({ ctx }: { ctx: string; }) => {
        return (
            <ul className={styles[ctx]}>
                {Object.keys(ROUTES).map((route, i) => {
                    return (
                        <li key={i}>
                            <NavLink
                                className={({ isActive }) => isActive ? styles.activeLink : undefined}
                                title={ROUTES[route][1]}
                                to={ROUTES[route][0]}
                                onClick={toggleMobileNav} // Close the mobile menu when a link is clicked
                            >
                                {route}
                            </NavLink>
                        </li>
                    );
                }
                )}
                <ToggleThemeButton />
            </ul>
        );
    };

    const toggleMobileNav = () => {
        const mobileNav = document.getElementsByClassName(styles.mobileNav)[0] as HTMLDivElement;
        mobileNav.classList.toggle(styles.displayMobileNav);

        // TODO: On page resize, close the menu if it's open only if the page is resized to a desktop view
        // TODO: Figure why have any other link except Home causes a horizontal overflow on mobile

        // While the menu is being displayed, prevent the user from scrolling the page
        /*         if (mobileNav.classList.contains(styles.displayMobileNav)) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "auto";
                } */
    };

    return (
        <>
            <div className={styles.topbar} ref={refer}>
                <div className={styles.siteLogoTitle} onClick={() => navigate("/")}>
                    <Avatar style={{
                        marginLeft: "0.75rem",
                        maxHeight: "85%"
                    }} />
                    <h1>Jeffrey Ganulin&apos;s Portfolio</h1>
                </div>
                <nav className={styles.desktopNav}>
                    <Links ctx="desktopLinks" />
                </nav>
                <button className={styles.mobileMenuButton} onClick={toggleMobileNav} aria-label="Open the navigation menu" title="Open the navigation menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                    </svg>
                </button>
            </div>
            <div className={styles.mobileNav}>
                <Links ctx="mobileLinks" />
            </div>
        </>
    );
}
