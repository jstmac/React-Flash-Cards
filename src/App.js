import React, { Component } from 'react';
import Cards from "./Cards"
import { Container, Header, Segment, Icon, Button, } from "semantic-ui-react";


class App extends Component {
  state= {
    cards: [
      { id: 1, cardFront: "Question 1", cardBack: "Answer 1", },
      { id: 2, cardFront: "Question 2", cardBack: "Answer 2", },
      { id: 3, cardFront: "Question 3", cardBack: "Answer 3", },
    ],
  };



  render() {
    return (
      <Container>
        <Header as="h1" color="purple">React Flash Cards</Header>
        <Cards flashCards={this.state.cards} />
      </Container>
    );
  }
}



export default App;
