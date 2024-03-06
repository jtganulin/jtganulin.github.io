import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

import App from './App.tsx';
import Home from './routes/Home.tsx';
import About from './routes/About.tsx';
import Contact from './routes/Contact.tsx';
import Projects from './routes/Projects.tsx';
import ProjectDetails from './routes/ProjectDetails.tsx';
import NotFound from './routes/NotFound.tsx';

import './index.css';

library.add(
	faGitAlt, faJs, faHtml5, faCss3Alt, faReact, faNode, faPhp, faPython,
	faJava, faBootstrap, faWindows, faLinux, faApple, faAndroid, faAws,
	faDocker, faGithub, faJira, faTrello, faMicrosoft, faFigma, faWordpress,
	faLinkedin, faTwitter, faInstagram, faFacebook, faYoutube, faDiscord, faSteam,
	faGoogle, faMapPin, faCloud, faDatabase, faCode, faTerminal, faArrowRotateRight,
	faMoon, faSun, faUsers, faComments, faQuestionCircle, faChartLine,
	faPalette, faAdjust, faBolt, faSearch, faEnvelope,
	faHandHoldingHeart, faHourglass, faUserSecret,
	faGraduationCap, faProjectDiagram, faMarkdown, faFileCode,
	faTasks, faColumns, faUserTie, faChalkboardTeacher, faTools, faCogs,
	faBook, faCheckSquare, faImage, faSlidersH, faPassport, faTrophy,
);

export const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <div className="constraint"><About /></div>,
			},
			{
				path: '/contact',
				element: <div className="constraint"><Contact /></div>,
			},
			{
				path: '/projects',
				element: <div className="constraint"><Projects /></div>,
			},
			{
				path: '/projects/:slug',
				element: <div className="constraint"><ProjectDetails /></div>,
			},
		],
	},
	{
		path: '/*',
		element: <NotFound />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<React.StrictMode>
			<ThemeProvider>
				<RouterProvider router={Router} />
			</ThemeProvider>
		</React.StrictMode>
	</>
)
