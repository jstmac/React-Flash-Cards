import React from "react";
import { Card as SemanticCard, Icon, Image, Button} from 'semantic-ui-react';

const FlashCards = ({flashCards}) => (
  flashCards.map(card => ( 
  <Card.Group>
    <Card>
      <Card.Content>
      <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
        <Card.Header>Question:</Card.Header>
        <Card.Description>
          {card.cardFront}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
    
      </Card.Content>
    </Card>
  </Card.Group>
)
 )
 )







export default FlashCards