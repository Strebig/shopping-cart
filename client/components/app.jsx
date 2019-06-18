import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummaryItem from './cart-summary-item';
import Checkout from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      },
      totalPrice: 0,
      cart: []
    };
    this.getProducts = this.getProducts.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.setView = this.setView.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.updateTotalPrice = this.updateTotalPrice.bind(this);
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

  updateTotalPrice(price) {
    this.setState({ totalPrice: price });
  }

  placeOrder(info) {
    let orderInfo = { ...this.state.cart, ...info };

    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderInfo)
    };
    fetch('/api/orders.php', req)
      .then(order => order.json())
      .then(checkout => {
        this.setState({
          view: {
            name: 'catalog',
            params: {}
          },
          cart: []
        });
      });
  }

  render() {
    const mainView = this.state.view.name;
    let mainPage;

    if (mainView === 'details') {
      mainPage = <ProductDetails products={this.state.products} view={this.state.view} params={this.state.view.params} setView={this.setView} addToCart={this.addToCart}/>;
    } else if (mainView === 'catalog') {
      mainPage = <ProductList products={this.state.products} setView={this.setView} addToCart={this.addToCart}/>;
    } else if (mainView === 'summary') {
      mainPage = <CartSummaryItem updateTotalPrice={this.updateTotalPrice} view={this.state.view} setView={this.setView} products={this.state.products} cartItem={this.state.cart}/>;
    } else if (mainView === 'checkout') {
      mainPage = <Checkout totalPrice={this.state.totalPrice} placeOrder={this.placeOrder} view={this.state.view} setView={this.setView} products={this.state.products} cartItem={this.state.cart}/>;
    }
    return (
      <div>
        <Header params={this.state.view.params} setView={this.setView} cartCount={this.state.cart.length}/>
        {mainPage}
      </div>
    );
  }
}
