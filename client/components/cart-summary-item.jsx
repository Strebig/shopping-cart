import React from 'react';
import { Row } from 'reactstrap';

export default class CartSummaryItem extends React.Component {

  componentDidMount() {
    this.getTotalPrice(this.props.cartItem);
  }

  handleSummary(e) {
    this.props.setView('summary', { 'id': this.props.products.id });
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
                <button onClick={this.props.delete} data-id={item.id} className='btn btn-danger cartSummaryButton'>Remove Item</button>
              </div>
            </div>
          </Row>
        </div>
      );
    });

    if (this.props.cartItem) {
      finalPrice = <h5 className="card-title red" >Total Cost: ${this.props.totalPrice}</h5>;
    } else {
      finalPrice = <h2 className="card-title"><b>There are no items in your cart</b></h2>;
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
          <button onClick={this.handleCheckout.bind(this)} className="btn-success btn-lg">
            Checkout
          </button>
        </div>
      </div>
    );
  }
}
