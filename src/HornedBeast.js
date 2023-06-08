import React from 'react';
import Button from 'react-bootstrap/Button';
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
      <>
      <article>
       
        <h2 onClick={this.HandleBeastClick}>{this.props.animalName}</h2>
        <p>❤️{this.state.hearts} Favorited</p>
        <p onClick={this.handleHeart}><Button variant="danger">Vote</Button></p>
        <img src={this.props.image_url} 
         alt={this.props.animalName}
        ></img>
        
        {/* <p>{this.props.description}</p> */}
        
       </article>
      
      </>
    )
  }  
}

export default HornedBeast;