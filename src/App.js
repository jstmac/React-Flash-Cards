import React, { Component } from 'react';
import Cards from "./Cards"
import FlashForm from "./FlashForm"
import { Container, Header, Segment, Icon, Button, } from "semantic-ui-react";




class App extends Component {
  state= {
    cards: [
      { id: 1, cardFront: "Question 1", cardBack: "Answer 1", },
      { id: 2, cardFront: "Question 2", cardBack: "Answer 2", },
      { id: 3, cardFront: "Question 3", cardBack: "Answer 3", },
    ],
  };

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 10000);
  };
  
  addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData, };
    this.setState({ cards: [card, ...this.state.cards], });
  };



  render() {
    return (
      <Container style={{ paddingTop: "25 px"}}>
        <Header as="h1" color="purple">React Flash Cards</Header>
        <br />
        <FlashForm add={this.addCard} />
        <Cards flashCards={this.state.cards} />
      </Container>
    );
  }
}






export default App;
