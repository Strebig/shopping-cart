import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.getProducts = this.getProducts.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }

  getProducts() {
    fetch('/api/products.php')
      .then(products => products.json())
      .then(products => {
        this.setState({ products });
      });
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(cart => cart.json())
      .then(cart => {
        this.setState({ cart });
      });
  }

  addToCart(product) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch('/api/cart.php', req)
      .then(product => product.json())
      .then(cartItem => {
        const allCartItems = this.state.cart.concat(cartItem);
        this.setState({ cart: allCartItems });
      });
  }

  setView(name, params) {
    this.setState({
      view: {
        name,
        params
      }
    });
  }

  render() {
    const mainView = this.state.view.name;
    let mainPage;

    if (mainView === 'details') {
      mainPage = <ProductDetails view={this.state.view} params={this.state.view.params} setView={this.setView} addToCart={this.addToCart}/>;
    } else if (mainView === 'catalog') {
      mainPage = <ProductList products={this.state.products} setView={this.setView} addToCart={this.addToCart}/>;
    }
    return (
      <div>
        <Header cartCount={this.state.cart.length}/>
        <div className='row-sm-4'>
          {mainPage}
        </div>
      </div>
    );
  }
}
