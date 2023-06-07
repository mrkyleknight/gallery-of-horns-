import React from 'react';



class HornedBeast extends React.Component {
  render() {
    const imageStyle = {
      width: '200px', 
      height: 'auto'
    };
    return(
      <>
      <article>
       
        <h2>{this.props.animalName}</h2>
        <img src={this.props.image_url} 
         alt={this.props.animalName}
         style={imageStyle}
        ></img>
        <p>{this.props.description}</p>
        
       </article>
      
      </>
    )
  }  
}

export default HornedBeast;