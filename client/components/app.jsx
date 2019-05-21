import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products.php')
      .then(products => products.json())
      .then(products => {
        this.setState({ products });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className='row-sm-4'>
          <ProductList products={this.state.products}/>
        </div>
      </div>
    );
  }
}
