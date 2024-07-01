import { useRef } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Helmet } from "react-helmet-async";
import Topbar from "./components/Topbar";
import styles from "./styles/Topbar.module.css";

function App() {
    const topbarRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const showAnim = gsap.from(topbarRef.current, {
            yPercent: -100,
            paused: true,
            duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: document.body.scrollHeight,
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
            }
        });

        // When the user resizes the browser window up, prevent the mobile menu from
        // opening automatically on subsequent resizes back down;
        // Also, restore user ability to scroll 
        let resetTimer: ReturnType<typeof setTimeout>;
        const mobileNav = document.getElementsByClassName(styles.mobileNav)[0] as HTMLDivElement;
        window.addEventListener("resize", () => {
            clearTimeout(resetTimer);
            resetTimer = setTimeout(() => {
                showAnim.play();
                // showAnim.pause();
                mobileNav.classList.remove(styles.displayMobileNav);
                // document.body.style.overflow = "auto";
            }, 200);
        });

        // When the user re-focuses on the page, show topbar
        document.addEventListener('visibilitychange', function () {
            if (!document.hidden) {
                // Page is visible again, reset the topbar
                showAnim.play();
            }
        }, false);

        return () => {
            // Clean up the scroll trigger on unmount
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.vars.trigger === containerRef?.current) {
                    trigger.kill();
                }
            });
        };
    });

    return (
        <>
            <Helmet
                defaultTitle={import.meta.env.VITE_APP_NAME as string}
                titleTemplate={"%s - " + import.meta.env.VITE_APP_NAME}
            />
            <ScrollRestoration />
            <Topbar refer={topbarRef} />
            <div ref={containerRef} id="contentContainer">
                <Outlet />
            </div>
        </>
    );
}

export default App;
