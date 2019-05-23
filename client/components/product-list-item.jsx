import React from 'react';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleView = this.handleView.bind(this);

  }

  handleView(e) {
    this.props.setView('details', { 'id': this.props.products.id });
  }

  render() {

    return (
      <div className="card-deck">
        <div className="card" >
          <img className="card-img-top main-height" src={this.props.products.image} alt="Product Image" onClick={this.props.setView}></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.products.name}</h5>
            <h5 className="card-title">${this.props.products.price / 100}</h5>
            <p className="card-text">{this.props.products.shortDescription}</p>
            <button className="btn btn-primary" onClick={this.handleView}>Buy Product </button>
          </div>
        </div>
      </div>
    );
  }
}
