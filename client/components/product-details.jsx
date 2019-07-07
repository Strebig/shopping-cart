import React from 'react';
import { Container, Row } from 'reactstrap';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.handleView = this.handleView.bind(this);
    this.handleCart = this.handleCart.bind(this);
  }

  handleView(e) {
    this.props.setView('catalog', { 'id': '' });
  }

  handleCart(e) {
    this.props.addToCart(this.props.params.product, this.state.quantity);
  }

  handleQuantityChange(event) {
    var quantity = event.target.value;
    this.setState({ quantity: quantity });
  }

  render() {
    return (
      <Container fluid className='text-center' >
        <Row>
          <div className="col-md-12 text-center">
            <button className="btn catalog-btn" onClick={this.handleView}>Back to Catalog</button>
          </div>
        </Row>
        <Row>
          <div className="col-md-6">
            <img className="card-img-top image-details col-12 img-fluid" src={this.props.params.product.image} alt="Product Image" ></img>
          </div>
          <div className="col-md-6 detailView">
            <h5 className="card-title"><b>{this.props.params.product.name}</b></h5>
            <h5 className="card-title red" >${(this.props.params.product.price / 100).toFixed(2)}</h5>
            <p className="card-text">{this.props.params.product.shortDesc}</p>
            <p className="card-title"><b>Quantity: <span><i className="fas fa-times fa-sm mr-1"></i></span>
              <input name="quantity" value={this.state.quantity} onChange={this.handleQuantityChange.bind(this)} >

              </input>
            </b></p>
            <button className="btn details-add-btn" onClick={this.handleCart}>Add to Cart </button>
            <p className="card-text card-text-long">{this.props.params.product.longDesc}</p>
          </div>
        </Row>
      </Container>
    );
  }
}
