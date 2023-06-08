import React from "react";
import Header from './Header';
import Main from "./Main";
import Footer from './Footer';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import "./Main.css";


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hearts: 1,
      showModal: false,
      selectedBeast: ''
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
  }

  render() {
    return (
      <>
        <Header hearts={this.state.hearts} />
        <Main 
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
          data={data}
        />  
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.selectedBeast && (
              <>
                <img 
                  src={this.state.selectedBeast.image_url}
                  alt={this.state.selectedBeast.name}
                  className="modal-image"
                />
                <p>{this.state.selectedBeast.description}</p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={this.handleCloseModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <Footer /> 
      </>
    );
  }
}

export default App;