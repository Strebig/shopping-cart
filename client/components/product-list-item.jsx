import React from 'react';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleView = this.handleView.bind(this);
    this.handleCart = this.handleCart.bind(this);
  }

  handleView(e) {
    this.props.setView('details', { 'id': this.props.products.id });
  }

  handleCart(e) {
    this.props.addToCart(this.props.products);
  }

  render() {

    return (
      <div className="card-deck">
        <div className="card" >
          <img className="card-img-top main-height" src={this.props.products.image} alt="Product Image" onClick={this.props.setView}></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.products.name}</h5>
            <h5 className="card-title">${(this.props.products.price / 100).toFixed(2)}</h5>
            <p className="card-text">{this.props.products.shortDescription}</p>
            <div className="row">
              <button className="btn btn-warning col-sm-5" onClick={this.handleView}>Details </button>
              <button className="btn btn-success col-sm-5" onClick={this.handleCart}>Buy Now </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
