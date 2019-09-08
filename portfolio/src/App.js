import React from 'react';  
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomePage from './Components/HomePage/Homepage';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Work } from './Components/Work/Work';
import { NoMatch } from './Components/Shared/NoMatch';
import {Layout } from './Components/Layout/Layout';
import { NavigationBar } from './Components/NavigationBar/NavigationBar';
import { Jumbotron } from './Components/Jumbotron/Jumbotron'

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/Work" component={Work}/>
              <Route component={NoMatch}/>
            </Switch>
        </Router>
      </Layout>

    </React.Fragment>
  );
}

export default App;
