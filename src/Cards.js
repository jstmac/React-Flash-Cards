import React from "react";
import Card from "./Card"
import { Card as C, Image, Button, Icon,} from 'semantic-ui-react';

const Cards = ({ flashCards, remove }) => (
    flashCards.map(card => ( 

    <C.Description>
      <C.Content>
        <C.Content>
        <Image  src='./images/flashcards.jpg' floated='right' size='large' />
          <C.Header>Question:</C.Header>
          <C.Description>
            {card.cardFront}
          </C.Description>
        </C.Content>
        
        </C.Content>
          <Button onClick= {() => remove(card.id)} basic      color='red'>
            Delete
          </Button>
          <Button basic color='blue'>
            Edit
          </Button>

    </C.Description>
  )
   )
   )







export default Cards