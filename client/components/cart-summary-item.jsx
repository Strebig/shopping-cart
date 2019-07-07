import React from 'react';
import { Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItems: []
    };
  }

  componentDidMount() {
    this.getTotalPrice(this.props.cart);
  }

  handleDetails(e) {
    let index;
    let id = e.target.dataset.id;
    let cart = this.props.cart;
    let product = cart.find(o => o.id === id);
    if (product) {
      index = product.id;
    } else {
      index = 'id';
    }
    this.props.setView('details', { 'id': index, product });
  }

  handleView(e) {
    this.props.setView('catalog', { 'id': '' });
  }

  handleCheckout() {
    this.props.setView('checkout', {});
  }

  getTotalPrice(items) {
    let currentPrice = 0;

    for (let item of items) {
      currentPrice += (parseInt(item.price) * item.quantity);
    }
    const newPrice = currentPrice / 100;
    this.props.updateTotalPrice(newPrice);
  }

  handleQuantityChange(event) {
    var index = event.currentTarget.dataset.index;
    var quantity = event.target.value;
    this.props.updateCart(index, quantity);
  }

  render() {
    let finalPrice;
    let checkoutButton;

    if (this.props.cart.length !== 0) {
      finalPrice = <h5 className="card-title red" >Total Cost: ${this.props.totalPrice}</h5>;
      checkoutButton =
        <button onClick={this.handleCheckout.bind(this)} className="btn-dark btn-lg button-format mb-4">
          Checkout
        </button>;
    } else {
      finalPrice = <h2 className="card-title"><b>There are no items in your cart</b></h2>;
      checkoutButton = null;
    }

    return (
      <div className="container text-center" >
        <Row>
          <div className="col-md-12 text-center">
            <button className="btn catalog-btn" onClick={this.handleView.bind(this)}>Back to Catalog</button>
          </div>
        </Row>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} id="delete-modal" centered>
          <ModalHeader className="red"><b>Remove 1 {this.props.activeItem.name} from Cart (x{this.props.activeItem.quantity})</b></ModalHeader>
          <ModalBody >Are you sure you want to remove this item?</ModalBody>
          <ModalFooter>
            <Button color="danger" className="button-format" data-id={this.props.activeItem.id} onClick={this.props.delete} >Remove from Cart</Button>{' '}
            <Button color="outline-secondary" className="button-format" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        {
          this.props.cart.map((item, i) => {
            return (
              <div key={i}>
                <Row className='cartItems'>
                  <div className="col-12 col-md-6">
                    <img className="card-img-top image-details img-fluid" src={item.image} alt="Product Image" ></img>
                  </div>
                  <div className="col-12 col-md-6 cartText">
                    <h5 className="card-title"><b>{item.name}</b></h5>
                    <h5 className="card-title red" >${(item.price / 100).toFixed(2)} Each</h5>
                    <p className="card-text">{item.shortDesc}</p>
                    <p className="card-title"><b>Quantity: <span><i className="fas fa-times fa-sm mr-1"></i></span>
                      <select name="quantity" value={item.quantity} onChange={this.handleQuantityChange.bind(this)} data-index={i}>
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
                    </b></p>
                    <p className="card-title red" >Current Total: ${(item.price * item.quantity / 100).toFixed(2)}</p>
                    <div className="mb-4">
                      <button onClick={this.handleDetails.bind(this)} data-id={item.id} className="btn mainProductButton blue cartSummaryButton">Details</button>
                      <button onClick={this.toggle} data-id={item.id} onClick={this.props.setActiveItem} className='btn cartSummaryButton cartDeleteButton'>Delete</button>
                    </div>
                  </div>
                </Row>
              </div>
            );
          })
        }
        <div className='checkoutPrice'>
          {finalPrice}
        </div>
        <div className='checkout'>
          {checkoutButton}
        </div>
      </div>
    );
  }
}
