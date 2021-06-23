import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Navigation from "./component/Navigation";

import './App.css';

function App() {
  return (
    <Router>
      <Navigation />

        <div className="container mt-5" style={{ marginTop: 40 }}>
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/projects">
                    <Projects />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
