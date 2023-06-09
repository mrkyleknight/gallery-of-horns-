import React from 'react';
import {Button, Card} from 'react-bootstrap';
import "./Main.css";




class HornedBeast extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hearts: 0,
      helpMe: false,

    }

  }

  handleHeart = () => {
    this.setState({
      hearts: this.state.hearts + 1
    })
  }

  needsHelp = () => {
    this.setState({
      hearts: true
    })

  }




 HandleBeastClick = () => {
  this.props.handleOpenModal(this.props.animal)
 }


  render() {
    // console.log(this.props);
   
    return(
      <Card  style={{ width: '18rem'}}>
        <Button onClick={this.handleHeart} variant="danger">Vote</Button>
        <Card.Img onClick={this.HandleBeastClick} src={this.props.image_url} 
         alt={this.props.animalName}
        /> 
        <Card.Body>
          <Card.Title>
          {this.props.animalName}
          </Card.Title>
          <Card.Text>
          ❤️{this.state.hearts}
          </Card.Text>
          <Card.Text>
          {this.props.description}
          </Card.Text>
        </Card.Body>
        
        {/* <p>{this.props.description}</p> */}
        
       
      
      </Card>
    )
  }  
}

export default HornedBeast;