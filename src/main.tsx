import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ThemeProvider from './providers/ThemeProvider';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGitAlt, faJs, faHtml5, faCss3Alt, faReact, faNode, faPhp, faPython,
    faJava, faBootstrap, faWindows, faLinux, faApple, faAndroid, faAws,
    faDocker, faGithub, faJira, faTrello, faMicrosoft, faFigma, faWordpress,
    faLinkedin, faTwitter, faInstagram, faFacebook, faYoutube, faDiscord, faSteam,
    faMarkdown, faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import {
    faMapPin, faCloud, faDatabase, faCode, faTerminal, faArrowRotateRight,
    faMoon, faSun, faUsers, faComments, faQuestionCircle, faExternalLinkAlt,
    faPalette, faAdjust, faBolt, faSearch, faHandHoldingHeart, faHourglass,
    faUserSecret, faGraduationCap, faProjectDiagram, faChartLine, faBroom,
    faFileCode, faTasks, faColumns, faUserTie, faSlidersH, faPassport, faTrophy,
    faChalkboardTeacher, faTools, faCogs, faBook, faCheckSquare, faImage,
    faEnvelope, faRobot,
} from '@fortawesome/free-solid-svg-icons';

import LoadingPage from "./routes/LoadingPage";
import ErrorPage from './routes/ErrorPage';
import App from './App.tsx';
import Home from './routes/Home.tsx';
const About = lazy(() => import('./routes/About.tsx'));
const Contact = lazy(() => import('./routes/Contact.tsx'));
const Projects = lazy(() => import('./routes/Projects.tsx'));
const ProjectDetails = lazy(() => import('./routes/ProjectDetails.tsx'));
const NotFound = lazy(() => import('./routes/NotFound.tsx'));

import './index.css';

library.add(
    faGitAlt, faJs, faHtml5, faCss3Alt, faReact, faNode, faPhp, faPython, faBroom,
    faJava, faBootstrap, faWindows, faLinux, faApple, faAndroid, faAws, faDocker, faGithub,
    faJira, faTrello, faMicrosoft, faFigma, faWordpress, faLinkedin, faTwitter, faInstagram,
    faFacebook, faYoutube, faDiscord, faSteam, faGoogle, faMapPin, faCloud, faDatabase,
    faCode, faTerminal, faArrowRotateRight, faMoon, faSun, faUsers, faComments,
    faQuestionCircle, faChartLine, faPalette, faAdjust, faBolt, faSearch, faEnvelope,
    faHandHoldingHeart, faHourglass, faUserSecret, faGraduationCap, faProjectDiagram,
    faMarkdown, faFileCode, faTasks, faColumns, faUserTie, faChalkboardTeacher, faTools,
    faCogs, faBook, faCheckSquare, faImage, faSlidersH, faPassport, faTrophy, faExternalLinkAlt, faRobot
);

const Router = createHashRouter([
    {
        path: '/',
        element: (
            <ErrorBoundary FallbackComponent={ErrorPage}>
                <ScrollRestoration />
                <App />
            </ErrorBoundary>
        ),
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/projects/:slug',
                element: <ProjectDetails />,
            },
            {
                path: '/*',
                element: <NotFound />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <Suspense fallback={<LoadingPage />}>
                <RouterProvider router={Router} />
            </Suspense>
        </ThemeProvider>
    </React.StrictMode>
);
