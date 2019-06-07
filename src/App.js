import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './Components/Home';
import App2 from './App2';
import Cards from "./Cards"
import FlashForm from "./FlashForm"
import { Container, Header, Segment, Icon, Button, } from "semantic-ui-react";

const App = () => {

  return (
    <>
    {/* <Navbar /> */}
    <Container>
    <Switch>
      <Route exact path="/" component={App2} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
    </Container>
    </>
  )
}
export default App;
