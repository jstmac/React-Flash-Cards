import React from "react";
import { Card as C, Icon, Button, Header, Segment} from 'semantic-ui-react';

const Cards = ({ flashCards, remove }) => (
    flashCards.map(card => ( 

    <C.Description>
      <C.Content>
        <C.Content>
        <Icon color='green' name='question circle' />
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