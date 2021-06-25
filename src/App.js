import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.css';

// Import Router Pages
import { Home } from './pages/Home';
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { Skills } from './pages/Skills';
import { Interests } from './pages/Interests';
import { NoMatch } from './pages/NoMatch';
import { Projects } from './pages/Projects';

// Import Components
import { Navigation } from "./component/Navigation";
import { Layout } from "./component/Layout";

// Create Application
class App extends Component {
    render() {
        return (
            <React.Fragment>
            <Navigation />
                <Layout><Router>
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route path="/home/experience" component={Experience} />
                        <Route path="/home/education" component={Education} />
                        <Route path="/home/skills" component={Skills} />
                        <Route path="/home/interests" component={Interests} />
                        <Route path="/home/projects" component={Projects} />
                        <Route component={NoMatch} />
                    </Switch>
                </Router></Layout>
            </React.Fragment>
        );
    }
}

export default App;