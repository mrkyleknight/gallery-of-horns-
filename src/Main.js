
import React from 'react';
import HornedBeast from './HornedBeast';
import "./Main.css";
import data from './data.json';
import Selected from "./SelectedBeast";
import Form from 'react-bootstrap/Form'


class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // hearts: 1,
      showModal: false,
      selectedBeast: null,
      beastSelection: data
    }

  }

  addHeart = () => {
    this.setState({
      hearts: this.state.hearts + 1
    });
  }

  handleOpenModal = (beast) => {
    console.log(beast);
    this.setState({
      showModal: true,
      selectedBeast: beast
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleSelect = (event) => {
    let selected = event.target.value;
    
    let filteredBeasts = data.filter(beast => beast.horns === parseInt(selected));
    
    this.setState({
      beastSelection: filteredBeasts
    });
  }


  render() {
    return (
<>
      <h1>Form</h1>

      <Form.Select onChange={this.handleSelect}>
      <option>Open this select menu</option>
      <option value="1">1 Horn</option>
      <option value="2">2 Horns</option>
      <option value="3">3 Horns</option>
      <option value="100">100 Horns</option>
    </Form.Select>

      
      <main>
        {this.state.beastSelection.map((animalObj, idx) => {
          return <HornedBeast animal={animalObj} animalName={animalObj.title} image_url={animalObj.image_url} addHearts={this.props.addHearts} handleOpenModal={this.handleOpenModal} key={idx} />
        })}

        {
        this.state.selectedBeast && 
        <Selected 
        showTheModal={this.state.showModal}
        closeTheModal={this.handleCloseModal}
        beastData={this.state.selectedBeast}
        />
       
    
        }
      {/* <h2> "A beast does not know that he is a beast, and the nearer a man gets to being a beast, the less he knows it."
        

George MacDonald</h2>
      <HornedBeast animalName='Dog' description='Dog with horns' image_url={'https://i.pinimg.com/originals/f5/0f/19/f50f1957c7a1b902471b6f6ad83d7684.jpg'} />
      <HornedBeast animalName='Cat' description='Cat with horns' image_url={'https://uploads.neatorama.com/images/posts/485/73/73485/1404320986-0.jpg'} />
      <HornedBeast animalName='Bird' description='Bird with horns' image_url={'https://dannybrownphotography.files.wordpress.com/2013/02/djb_rvl_2013_01831.jpg'} />
      <HornedBeast animalName='Rabbit' description='Rabbit with horns' image_url={'https://t3.ftcdn.net/jpg/05/35/65/92/360_F_535659252_n2hQBI4kHqEyATPDkAU59GrXbqWqgeFE.jpg'} /> */}
      </main>
      </>
    ) 
  }

}

export default Main;