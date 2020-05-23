import React from 'react';
import { MainMenu } from './MainMenu';
import { Footer } from './Footer';
import { Work } from './Work/Work';
import { Project } from './Project/Project';

function App() {
	return (
		<div>
			<MainMenu />
			<Project />
			<Footer />
		</div>
	);
}

export default App;
