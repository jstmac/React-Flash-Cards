import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './Components/Home';
import App2 from './App2';
import About from './Components/About';
import NoMatch from './Components/NoMatch';
import NavBar from './Components/NavBar';
// import Cards from "./Cards"
// import FlashForm from "./FlashForm"
import { Container, } from "semantic-ui-react";

const App = () => (
  <>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/App2" component={App2} />
        <Route exact path="/About" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);
export default App;
