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

  checkOut(e) {
    this.props.setView('summary', {});
  }

  handleView(e) {
    this.props.setView('details', { 'id': this.props.product.id, 'product': this.props.product });
  }

  handleCart(e) {
    this.props.addToCart(this.props.product, this.state.quantity);
    this.toggleSuccess();
    this.setState({ quantity: 1 });
  }

  handleInputChange(event) {
    var value = event.target.value;
    var name = event.target.name;
    if (value < 1) {
      value = 1;
    }
    this.setState({
      [name]: value
    });
  }

  render() {
    return (

      <div className="card-deck mainProducts col-md-6 col-lg-4 ">
        <Modal isOpen={this.state.didAddItemToCart} id="success-modal" centered>
          <ModalHeader>
            <b>You're cart has been updated!</b>
          </ModalHeader>
          <ModalBody >
            <h4 className="text-center">You've successfully added {this.props.product.name} to your Cart!</h4>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" className="button-format text-center" onClick={this.checkOut.bind(this)}>Go to Cart</Button>
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
            <input placeholder='1' type="number" className='quantity-selector' name="quantity" value={this.state.quantity} onChange={this.handleInputChange.bind(this)} >
                      </input>
          </div>
        </div>
      </div>
    );
  }
}
