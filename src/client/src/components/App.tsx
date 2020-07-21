import React from 'react';
import {Footer} from './Footer';
import {Provider} from 'mobx-react';
import {createStores} from '../stores/CreateStore';
import {Project} from './Project/Project';
import {Login} from './Login/Login';
import {MainMenu} from "./MainMenu";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Projects} from "./Projects/Projects";
import { Work } from "./Work/Work";


const stores = createStores()

function App() {
    return (
        <Provider {...stores}>
            <Router>
                <MainMenu/>

                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route path="/projects/:id" component={Project}/>
                    <Route exact path="/works/:id" component={Work}/>
                    {/*<Route exact path="/changes/:id" component={Change}/>*/}
                </Switch>

                <Footer/>
            </Router>
        </Provider>
    );
}

export default App;
