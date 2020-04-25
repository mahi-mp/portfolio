import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './routes/about';
import Home from './routes/home';
import Blog from './routes/blog';
import Projects from './routes/projects';

export default class AllRoutes extends Component{
    render(){
        return(
            <Router>
                <Link to="/about" >About</Link>
                <Link to="/home" >Home</Link>
                <Link to="/blog" >Blog</Link>
                <Link to="/projects" >Projects</Link>

                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/projects" component={Projects} />
                </Switch>
            </Router>
        )
    }
}