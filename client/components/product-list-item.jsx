import React from 'react';

export default class ProductListItem extends React.Component {

  render() {

    return (
      <div className="card" >
        <img className="card-img-top" src={this.props.products.image} alt="Product Image" onClick={this.props.setView}></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.products.name}</h5>
          <h5 className="card-title">${this.props.products.price / 100}</h5>
          <p className="card-text">{this.props.products.shortDescription}</p>
          <button className="btn btn-primary" onClick={this.props.setView}>Buy Product </button>
        </div>
      </div>
    );
  }
}
