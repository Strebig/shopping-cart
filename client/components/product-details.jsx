import React from 'react';
import { Container, Row } from 'reactstrap';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleView = this.handleView.bind(this);
    this.handleCart = this.handleCart.bind(this);
  }

  handleView(e) {
    this.props.setView('catalog', { 'id': '' });
  }

  handleCart(e) {
    this.props.addToCart(this.props.params.product);
  }

  render() {
    return (
      <Container fluid className='text-center' >
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className="nav-link active" href='#' onClick={this.handleView}>Back to Catalog</a>
            </li>
          </ul>
        </div>
        <Row>
          <div className="col-12 col-md-6">
            <img className="card-img-top image-details col-12" src={this.props.params.product.image} alt="Product Image" ></img>
          </div>
          <div className="col-12 col-md-6 detailView">
            <h5 className="card-title"><b>{this.props.params.product.name}</b></h5>
            <h5 className="card-title red" >${(this.props.params.product.price / 100).toFixed(2)}</h5>
            <p className="card-text">{this.props.params.product.shortDesc}</p>
            <button className="btn btn-success" onClick={this.handleCart}>Add to Cart </button>
          </div>
        </Row>
        <Row>
          <p className="card-text offset-6">{this.props.params.product.longDesc}</p>
        </Row>
      </Container>
    );
  }
}
