import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
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
    faMoon, faSun, faUsers, faComments, faQuestionCircle,
    faPalette, faAdjust, faBolt, faSearch, faHandHoldingHeart, faHourglass,
    faUserSecret, faGraduationCap, faProjectDiagram, faChartLine,
    faFileCode, faTasks, faColumns, faUserTie, faSlidersH, faPassport, faTrophy,
    faChalkboardTeacher, faTools, faCogs, faBook, faCheckSquare, faImage, faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import ThemeProvider from './providers/ThemeProvider';

import LoadingPage from "./routes/LoadingPage";
import ErrorPage from './routes/ErrorPage';
const App = lazy(() => import('./App.tsx'));
const Home = lazy(() => import('./routes/Home.tsx'));
const About = lazy(() => import('./routes/About.tsx'));
const Contact = lazy(() => import('./routes/Contact.tsx'));
const Projects = lazy(() => import('./routes/Projects.tsx'));
const ProjectDetails = lazy(() => import('./routes/ProjectDetails.tsx'));
const NotFound = lazy(() => import('./routes/NotFound.tsx'));

import './index.css';

library.add(
    faGitAlt, faJs, faHtml5, faCss3Alt, faReact, faNode, faPhp, faPython,
    faJava, faBootstrap, faWindows, faLinux, faApple, faAndroid, faAws, faDocker, faGithub,
    faJira, faTrello, faMicrosoft, faFigma, faWordpress, faLinkedin, faTwitter, faInstagram,
    faFacebook, faYoutube, faDiscord, faSteam, faGoogle, faMapPin, faCloud, faDatabase,
    faCode, faTerminal, faArrowRotateRight, faMoon, faSun, faUsers, faComments,
    faQuestionCircle, faChartLine, faPalette, faAdjust, faBolt, faSearch, faEnvelope,
    faHandHoldingHeart, faHourglass, faUserSecret, faGraduationCap, faProjectDiagram,
    faMarkdown, faFileCode, faTasks, faColumns, faUserTie, faChalkboardTeacher, faTools,
    faCogs, faBook, faCheckSquare, faImage, faSlidersH, faPassport, faTrophy,
);

const Router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ErrorBoundary FallbackComponent={ErrorPage}>
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
    <>
        <React.StrictMode>
            <ThemeProvider>
                <Suspense fallback={<LoadingPage />}>
                    <RouterProvider router={Router} />
                </Suspense>
            </ThemeProvider>
        </React.StrictMode>
    </>
);
