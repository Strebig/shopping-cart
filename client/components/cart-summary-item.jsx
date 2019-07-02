import React from 'react';
import { Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.getTotalPrice(this.props.cartItem);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleDetails(e) {
    let index;
    let id = e.target.dataset.id;
    let cart = this.props.cartItem;
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

  getNewItems(items) {
    let newItems = [];

    for (var i = 0; i < items.length; i++) {
      let id = items[i].id;
      let found = newItems.find(o => o.id === id);
      if (!found) {
        newItems.push({ ...items[i], quantity: 1 });
      } else {
        let index = newItems.indexOf(found);
        newItems[index].quantity++;
      }
    }
    return newItems;
  }

  getTotalPrice(items) {
    let currentPrice = 0;

    for (let item of items) {
      currentPrice += parseInt(item.price);
    }
    const newPrice = currentPrice / 100;
    this.props.updateTotalPrice(newPrice);
  }

  render() {
    let finalPrice;
    let checkoutButton;
    let newItems = this.getNewItems(this.props.cartItem);
    let items = newItems.map((item, i) => {
      return (
        <div key={i}>
          <Row className='cartItems'>
            <div className="col-12 col-sm-6">
              <img className="card-img-top image-details col-12" src={item.image} alt="Product Image" ></img>
            </div>
            <div className="col-12 col-sm-6 cartText">
              <h5 className="card-title"><b>{item.name} x{item.quantity}</b></h5>
              <h5 className="card-title red" >${(item.price / 100).toFixed(2)} Each</h5>
              <p className="card-text">{item.shortDesc}</p>
              <p className="card-title"><b>Current Quantity: x{item.quantity}</b></p>
              <p className="card-title red" >Current Total: ${(item.price * item.quantity / 100).toFixed(2)}</p>
              <select>
                <option value="">Update Quantity?</option>
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
              <div>
                <button onClick={this.handleDetails.bind(this)} data-id={item.id} className="btn btn-warning col-5 cartSummaryButton">Item Summary</button>
                <button onClick={this.toggle} data-id={item.id} className='btn btn-danger col-5  cartSummaryButton'>Remove Item</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                  <ModalHeader className="red"><b>Remove 1 {item.name} from Cart</b></ModalHeader>
                  <ModalBody>Are you sure you want to remove this item?</ModalBody>
                  <ModalFooter>
                    <Button color="danger" data-id={item.id} onClick={this.props.delete} toggle={this.toggle}>Remove from Cart</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </Row>
        </div>
      );
    });

    if (this.props.cartItem.length !== 0) {
      finalPrice = <h5 className="card-title red" >Total Cost: ${this.props.totalPrice}</h5>;
      checkoutButton =
        <button onClick={this.handleCheckout.bind(this)} className="btn-success btn-lg">
          Checkout
        </button>;
    } else {
      finalPrice = <h2 className="card-title"><b>There are no items in your cart</b></h2>;
      checkoutButton = null;
    }

    return (
      <div className="container text-center" >
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className="nav-link active" href='#' onClick={this.handleView.bind(this)}>Back to Catalog</a>
            </li>
          </ul>
        </div>
        {items}
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
