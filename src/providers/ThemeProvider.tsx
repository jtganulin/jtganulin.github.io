import { createContext, useEffect, useLayoutEffect, useState } from "react";

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: "",
    toggleTheme: () => void(0),
});

function ThemeProvider({ children }: { children: React.ReactNode; }) {
    // By default, use the user's OS color scheme preference
    const [theme, setTheme] = useState((window?.matchMedia && window?.matchMedia('(prefers-color-scheme: dark)')?.matches) ? "dark" : "light");

    const toggleTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light");
    };

    // If the user updates their OS color scheme preference, update the theme
    useEffect(() => {
        const changeTheme = (event: MediaQueryListEvent) => {
            const newColorScheme = event.matches ? "dark" : "light";
            setTheme(newColorScheme);
        };

        // Update theme if user's OS color scheme preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeTheme);

        // Clean up the event listener on unmount
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', changeTheme);
        };
    }, []);

    useLayoutEffect(() => {
        if (document.documentElement.getAttribute("data-theme") !== theme) {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext };
export default ThemeProvider;
