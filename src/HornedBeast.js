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
    const imageStyle = {
      width: '200px', 
      height: 'auto'
    };
    return(
      <>
      <article>
       
        <h2>{this.props.animalName}</h2>
        <p>❤️{this.state.hearts} Favorited</p>
        <p onClick={this.handleHeart}>Click to Favorite</p>
        <img src={this.props.image_url} 
         alt={this.props.animalName}
         style={imageStyle}
        ></img>
        <Button variant="danger">Beast</Button>
        {/* <p>{this.props.description}</p> */}
        
       </article>
      
      </>
    )
  }  
}

export default HornedBeast;