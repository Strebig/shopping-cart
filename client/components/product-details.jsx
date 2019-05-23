import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleView = this.handleView.bind(this);

  }

  componentDidMount() {
    fetch('/api/products.php?id=' + this.props.params.id)
      .then(id => id.json())
      .then(id => {
        this.setState({ product: id });
      });
  }

  handleView(e) {
    this.props.setView('catalog', { 'id': '' });
  }

  render() {
    let productView;

    if (this.state.product) {
      productView = (
        <div className="container text-center" >
          <div className="card-header">
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <a className="nav-link active" onClick={this.handleView}>Back to Catalog</a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <img className="card-img-top image-details" src={this.state.product.image} alt="Product Image" ></img>
            </div>
            <div className="col-sm-6">
              <h5 className="card-title"><b>{this.state.product.name}</b></h5>
              <h5 className="card-title red" >${this.state.product.price / 100}</h5>
              <p className="card-text">{this.state.product.shortDescription}</p>
            </div>
          </div>
          <p className="card-text">{this.state.product.longDescription}</p>
          <button className="btn btn-success" >Buy Product </button>
        </div>
      );
    }
    return (
      <div className='container-fluid'>
        {productView}
      </div>
    );
  }
}
