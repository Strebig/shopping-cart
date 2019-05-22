import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('/api/products.php?id=' + this.props.params.id)
      .then(id => id.json())
      .then(id => {
        this.setState({ product: id });
      });
  }

  render() {
    let productView;

    if (this.state.product) {
      productView = (
        <div className="card" >
          <img className="card-img-top" src={this.state.product.image} alt="Product Image" ></img>
          <div className="card-body">
            <h5 className="card-title">{this.state.product.name}</h5>
            <h5 className="card-title">${this.state.product.price / 100}</h5>
            <p className="card-text">{this.state.product.shortDescription}</p>
            <button className="btn btn-primary" onClick={this.handleView}>Buy Product </button>
          </div>
        </div>
      );
    }

    return <div className='container'>{productView}</div>;

    // return 'TESTING TESTING ONE TWO THREE' + this.state.product;
    //   </div>
    // );

  }
}
