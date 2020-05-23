import React from 'react';
import { MainMenu } from './MainMenu';
import { Footer } from './Footer';
import { Work } from './Work/Work';
import { Project } from './Project/Project';
import {Projects} from "./Projects/Projects";

function App() {
	return (
		<div>
			<MainMenu />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
