import React from 'react';
import { Container, Row } from 'reactstrap';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleView = this.handleView.bind(this);
    this.handleCart = this.handleCart.bind(this);
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

  handleCart() {
    this.props.addToCart(this.state.product);
  }

  render() {
    let details = this.props.products.map((item, i) => {
      if (item.id === this.props.params.id) {
        return (
          <div key={i}>
            <Container fluid className='text-center' >
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <a className="nav-link active" href='' onClick={this.handleView}>Back to Catalog</a>
                  </li>
                </ul>
              </div>
              <Row>
                <div className="col-12 col-md-6">
                  <img className="card-img-top image-details col-12" src={item.image} alt="Product Image" ></img>
                </div>
                <div className="col-12 col-md-6">
                  <h5 className="card-title"><b>{item.name}</b></h5>
                  <h5 className="card-title red" >${(item.price / 100).toFixed(2)}</h5>
                  <p className="card-text">{item.shortDesc}</p>
                  <button className="btn btn-success" onClick={this.handleCart}>Add to Cart </button>
                </div>
              </Row>
              <Row>
                <p className="card-text">{item.longDesc}</p>
              </Row>
            </Container>
          </div>
        );
      }
    });
    return (
      <Container fluid>
        {details}
      </Container>
    );
  }
}
