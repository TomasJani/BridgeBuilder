import React from 'react';
import {Footer} from './Footer';
import {Provider} from 'mobx-react';
import {createStores} from '../stores/createStore';
import {Project} from './Project/Project';
import {Login} from './Login/Login';
import {MainMenu} from "./MainMenu";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


const stores = createStores()

function App() {
    return (
        <Provider {...stores}>
            <MainMenu/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/projects" component={Project}/>
                </Switch>
                <Footer/>
            </Router>
        </Provider>
    );
}

export default App;
