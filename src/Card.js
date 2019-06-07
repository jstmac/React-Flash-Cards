import React from "react";
import { Card as C, Icon, Button, } from 'semantic-ui-react'

const Card = ({ id, cardFront, cardBack, remove}) => (
  <C>
    
  
    
    
    
    
    <C.Content>
      <C.Header>Question</C.Header>
      <C.Description>
       {Card.cardFront})
      </C.Description>
      <Button color="red" icon onClick={() => remove(id)}>
        <Icon name="lemon" />
        </Button>
    </C.Content>
    <C.Content extra>
    </C.Content>
  </C>
)

export default Card;