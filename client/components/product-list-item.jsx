import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: '',
      modal: false,
      didAddItemToCart: false
    };
    this.handleView = this.handleView.bind(this);
    this.handleCart = this.handleCart.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
  }

  toggleSuccess() {
    this.setState(prevState => ({
      didAddItemToCart: !prevState.didAddItemToCart
    }));
  }

  handleView(e) {
    this.props.setView('details', { 'id': this.props.product.id, 'product': this.props.product });
  }

  handleCart(e) {
    this.props.addToCart(this.props.product, this.state.quantity);
    this.toggleSuccess();
    this.setState({ quantity: 0 });
  }

  handleInputChange(event) {
    var value = event.target.value;
    var name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      
      <div className="card-deck mainProducts col-md-6 col-lg-4 ">
        <Modal isOpen={this.state.didAddItemToCart} toggle={this.toggleSuccess} id="success-modal" centered>
          <ModalHeader>
            <b>You're cart has been updated!</b>
          </ModalHeader>
          <ModalBody >
            <h4>You've successfully added {this.props.product.name} to your Cart!</h4>
          </ModalBody>
          <ModalFooter>
            <Button color="outline-secondary" className="button-format text-center" onClick={this.toggleSuccess}>Continue Shopping</Button>
          </ModalFooter>
        </Modal>
        <div className="card" >
          <img className="card-img-top main-height img-fluid" src={this.props.product.image} alt="Product Image" onClick={this.handleView}></img>
          <div className="card-body ">
            <h5 className="card-title text-center">{this.props.product.name}</h5>
            <h5 className="card-title text-center">${(this.props.product.price / 100).toFixed(2)}</h5>
            <p className="card-text text-center">{this.props.product.shortDesc}</p>
          </div>
          <div className="card-footer text-center">
            <button className="btn btn-dark mainProductButton" onClick={this.handleView}>More</button>
            <button className="btn mainProductButton" onClick={this.handleCart}>Add to Cart </button>
            <select className='quantity-selector' name='quantity' onChange={this.handleInputChange.bind(this)} value={this.state.quantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
