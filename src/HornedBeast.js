import React from 'react';
import Button from 'react-bootstrap/Button';




class HornedBeast extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hearts: 0

    }

  }

  handleHeart = () => {
    this.setState({
      hearts: this.state.hearts + 1
    })
  }

  render() {
    console.log(this.props);
   
    return(
      <>
      <article>
       
        <h2>{this.props.animalName}</h2>
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