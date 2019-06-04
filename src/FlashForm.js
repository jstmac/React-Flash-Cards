import React from "react";
import { Form, } from "semantic-ui-react";

class FlashForm extends React.Component {
  state = { cardFront: "", cardBack: "", };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.add(this.state);
    this.setState({ cardFront: "", cardBack: "", });
} 
    // Call a function to add a contact to state
    // Where should this function be defined???


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }; 

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Card Front" 
            placeholder="Card Front" 
            name="cardFront"
            value={this.state.cardFront} 
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid 
            label="CardBack" 
            placeholder="CardBack" 
            name="cardBack"
            value={this.state.cardBack} 
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )  
  }
}

export default FlashForm;