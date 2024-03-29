import { useContext, useRef } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ThemeContext } from "./providers/ThemeProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Helmet from "react-helmet";

import Topbar from "./components/Topbar";

function App() {
    const refer = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { theme } = useContext(ThemeContext);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const showAnim = gsap.from(refer.current, {
            yPercent: -100,
            paused: true,
            duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: document.body.scrollHeight,
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse()
            }
        });

        // When the user loses focus on the page, pause the animation
        window.addEventListener("blur", () => {
            showAnim.pause();
        });

        // When the user focuses on the page, play the animation
        window.addEventListener("focus", () => {
            showAnim.play();
        });

        return () => {
            // Clean up the scroll trigger on unmount
            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.kill();
            });

            // Remove any event listeners
        }
    });

    return (
        <>
            <Helmet
                defaultTitle={import.meta.env.VITE_APP_NAME as string}
                titleTemplate={"%s - " + import.meta.env.VITE_APP_NAME}
            />
            <ScrollRestoration />
            <div id="page" data-theme={theme}>
                <Topbar refer={refer} />
                <div ref={containerRef} style={{ marginTop: "7vh" }}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default App;
