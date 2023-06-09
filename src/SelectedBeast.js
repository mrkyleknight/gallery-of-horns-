import React from 'react';
import {Modal, Button} from 'react-bootstrap';






class Selected extends React.Component {
  constructor(props) {
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
     
      
        <Modal show={this.props.showTheModal} onHide={this.props.closeTheModal}>
        
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beastData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.beastData && (
              <>
                <img
                  src={this.props.beastData.image_url}
                  alt={this.props.beastData.name}
                  className="modal-image"
                />
                <p>{this.props.beastData.description}</p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.closeTheModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </> 
    )

  }

}
export default Selected;