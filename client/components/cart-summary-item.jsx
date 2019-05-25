import React from 'react';

export default class CartSummaryItem extends React.Component {

  handleSummary(e) {
    this.props.setView('summary', { 'id': this.props.products.id });
  }

  handleView(e) {
    this.props.setView('catalog', { 'id': '' });
  }

  render() {
    let totalPrice = this.props.cartItem;
    let currentPrice = 0;
    let finalPrice;

    let items = this.props.cartItem.map(item => {
      return (
        <div key={item.id}>
          <div className="row">
            <div className="col-sm-6">
              <img className="card-img-top image-details" src={item.image} alt="Product Image" ></img>
            </div>
            <div className="col-sm-6">
              <h5 className="card-title"><b>{item.name}</b></h5>
              <h5 className="card-title red" >${(item.price / 100).toFixed(2)}</h5>
              <p className="card-text">{item.shortDescription}</p>
            </div>
          </div>
        </div>
      );
    });

    if (this.props.cartItem) {
      for (let item of totalPrice) {
        currentPrice += parseInt(item.price);
      }
      const newPrice = currentPrice / 100;
      finalPrice = <h5 className="card-title red" >Total Cost: ${newPrice.toFixed(2)}</h5>;
    } else {
      finalPrice = <h2 className="card-title"><b>There are no items in your cart</b></h2>;
    }

    return (
      <div className="container text-center" >
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className="nav-link active" onClick={this.handleView.bind(this)}>Back to Catalog</a>
            </li>
          </ul>
        </div>
        {items}
        {finalPrice}
      </div>
    );
  }
}
