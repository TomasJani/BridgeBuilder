import React from 'react';
import {Footer} from './Footer';
import {Provider} from 'mobx-react';
import {createStores} from '../stores/CreateStore';
import {Project} from './Project/Project';
import {Login} from './Login/Login';
import {MainMenu} from "./MainMenu";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import {Projects} from "./Projects/Projects";
import {Work} from "./Work/Work";
import {Collaborators} from "./Collaborators/Collaborators";
import {Changes} from "./Changes/Changes";
import {ChangeDetail} from "./Changes/ChangeDetail";


const stores = createStores()

function App() {
    return (
        <Provider {...stores}>
            <Router>
                <MainMenu/>

                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route path="/changes/:id" component={ChangeDetail}/>
                    <Route path="/projects/:id" component={Project}/>
                    <Route path="/collaborators/:id" component={Collaborators}/>
                    <Route path="/:projectId/works/:workId/changes" component={Changes}/>
                    <Route path="/:projectId/works/:id" component={Work}/>
                    <Route path="*" component={Login}/>
                </Switch>

                <Footer/>
            </Router>
        </Provider>
    );
}

export default App;
