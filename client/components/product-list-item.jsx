import React from 'react';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleView = this.handleView.bind(this);
    this.handleCart = this.handleCart.bind(this);
  }

  handleView(e) {
    this.props.setView('details', { 'id': this.props.product.id, 'product': this.props.product });
  }

  handleCart(e) {
    this.props.addToCart(this.props.product);
  }

  render() {
    return (
      <div className="card-deck mainProducts">
        <div className="card" >
          <img className="card-img-top main-height" src={this.props.product.image} alt="Product Image" onClick={this.handleView}></img>
          <div className="card-body ">
            <h5 className="card-title text-center">{this.props.product.name}</h5>
            <h5 className="card-title text-center">${(this.props.product.price / 100).toFixed(2)}</h5>
            <p className="card-text text-center">{this.props.product.shortDesc}</p>
            <div className="row">
              <button className="btn btn-warning col-5 offset-2 mainProductButton" onClick={this.handleView}>More Info </button>
              <button className="btn btn-success col-5 mainProductButton" onClick={this.handleCart}>Add to Cart </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
