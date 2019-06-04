import React from "react";
import FlashCard from "./FlashCard"
import { Card as C, Icon, Image, Button} from 'semantic-ui-react';

const Cards = ({flashCards}) => (
    flashCards.map(card => ( 
    <C.Description>
      <C>
        <C.Content>
        <Image floated='right' size='mini' src="./images/" />
          <C.Header>Question:</C.Header>
          <C.Description>
            {card.cardFront}
          </C.Description>
        </C.Content>
        <C.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
            </Button>
            <Button basic color='red'>
              Decline
            </Button>
          </div>
      
        </C.Content>
      </C>
    </C.Description>
  )
   )
   )







export default Cards