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
      <div className="card-deck mainProducts">
        <div className="card" >
          <img className="card-img-top main-height" src={this.props.products.image} alt="Product Image" onClick={this.handleView}></img>
          <div className="card-body ">
            <h5 className="card-title text-center">{this.props.products.name}</h5>
            <h5 className="card-title text-center">${(this.props.products.price / 100).toFixed(2)}</h5>
            <p className="card-text text-center">{this.props.products.shortDesc}</p>
            <div className="row">
              <button className="btn btn-warning col-4 offset-2 mainProductButton" onClick={this.handleView}>Details </button>
              <button className="btn btn-success col-4 mainProductButton" onClick={this.handleCart}>Buy Now </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
