import React, {Suspense, lazy} from 'react';
import {Footer} from './Footer';
import {Provider} from 'mobx-react';
import {createStores} from '../stores/CreateStore';
import {MainMenu} from "./MainMenu";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

const Login = lazy(() => import('./Login/Login'));
const Projects = lazy(() => import('./Projects/Projects'));
const Project = lazy(() => import('./Project/Project'));
const Work = lazy(() => import('./Work/Work'));
const Collaborators = lazy(() => import('./Collaborators/Collaborators'));
const Changes = lazy(() => import('./Changes/Changes'));
const ChangeDetail = lazy(() => import('./Changes/ChangeDetail'));

const stores = createStores()

function App() {
    return (
        <Provider {...stores}>
            <Router>
                <MainMenu/>
                <Suspense fallback={<div>Loading...</div>}>
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
                </Suspense>
                <Footer/>
            </Router>
        </Provider>
    );
}

export default App;
