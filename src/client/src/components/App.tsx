import React from 'react';
import { MainMenu } from './MainMenu';
import { Footer } from './Footer';
import { Provider } from 'mobx-react';
import { Projects } from "./Projects/Projects";
import { createStores } from '../stores/createStore';
import { Project } from './Project/Project';
import { Work } from './Work/Work';
import { Changes } from './Changes/Changes';

const stores = createStores()

function App() {
	return (
		<Provider {...stores}>
			<MainMenu />
			{/* <Changes projectId={1} /> */}
			{/* <Work /> */}
			<Project />
			<Footer />
		</Provider>
	);
}

export default App;
