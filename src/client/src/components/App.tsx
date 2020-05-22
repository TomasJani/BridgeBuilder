import React from 'react';
import { MainMenu } from './MainMenu';
import { Footer } from './Footer';
import { WorkEdit } from './WorkEdit/WorkEdit';

function App() {
	return (
		<div>
			<MainMenu />
			<WorkEdit />
			<Footer />
		</div>
	);
}

export default App;
