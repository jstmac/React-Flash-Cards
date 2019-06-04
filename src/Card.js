import React from "react";
import { Card as C, Icon, Image } from 'semantic-ui-react'

const Card = ({cardFront}) => (
  <C>
    <Image src='/images/flashcards.png' wrapped ui={false} />
    <C.Content>
      <C.Header>Question</C.Header>
      <C.Description>
       {Card.cardFront}
      </C.Description>
    </C.Content>
    <C.Content extra>
    
    </C.Content>
  </C>
)

export default Card;