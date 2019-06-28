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
      cart: [],
      errors: {
        fullName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        card: ''
      }
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
        const allCartItems = this.state.cart.concat({ ...cartItem, quantity: 1 });
        this.setState({ cart: allCartItems });
      });
  }

  deleteACartItem(e) {
    let id = e.target.dataset.id;
    let cart = this.state.cart;
    let found = cart.find(o => o.id === id);
    if (found) {
      let index = cart.indexOf(found);
      let quantity = found.quantity;

      if (quantity > 1) {
        found.quantity--;
        cart[index] = found;
      } else {
        cart.splice(index, 1);
      }
      this.getTotalPrice(cart);
      this.setState({ cart });
    }
  }

  getTotalPrice(items) {

    let currentPrice = 0;

    for (let item of items) {
      currentPrice += parseInt(item.price);
    }
    const newPrice = currentPrice / 100;
    this.updateTotalPrice(newPrice);
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
    if (this.verifyFormFields(info)) {
      let orderInfo = { cart: this.state.cart, ...info };
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderInfo)
      };
      fetch('/api/checkout.php', req)
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
  }

  verifyFormFields(user) {
    var errors = this.state.errors;
    var entries = Object.entries(user);
    var passed = true;
    for (var i = 0; i < entries.length; i++) {
      if (entries[i][0] === 'fullName' && entries[i][1].length > 30) {
        errors[entries[i][0]] = 'Name exceed maximum length';
        passed = false;
      } else if (entries[i][0] === 'fullName' && entries[i][1] === '') {
        errors[entries[i][0]] = 'Required';
        passed = false;
      } else if (entries[i][0] === 'fullName') {
        errors[entries[i][0]] = '';
      }
      if (entries[i][0] === 'address' && entries[i][1].length > 40) {
        errors[entries[i][0]] = 'Address exceed maximum length';
        passed = false;
      } else if (entries[i][0] === 'address' && entries[i][1] === '') {
        errors[entries[i][0]] = 'Required';
        passed = false;
      } else if (entries[i][0] === 'address') {
        errors[entries[i][0]] = '';
      }
      if (entries[i][0] === 'city' && entries[i][1].length > 20) {
        errors[entries[i][0]] = 'City exceed maximum length';
        passed = false;
      } else if (entries[i][0] === 'city' && entries[i][1] === '') {
        errors[entries[i][0]] = 'Required';
        passed = false;
      } else if (entries[i][0] === 'city') {
        errors[entries[i][0]] = '';
      }
      if (entries[i][0] === 'state' && entries[i][1].length > 2) {
        errors[entries[i][0]] = 'State exceed maximum length';
        passed = false;
      } else if (entries[i][0] === 'state' && entries[i][1] === '') {
        errors[entries[i][0]] = 'Required';
        passed = false;
      } else if (entries[i][0] === 'state') {
        errors[entries[i][0]] = '';
      }
      if (entries[i][0] === 'zip' && entries[i][1].length > 5) {
        errors[entries[i][0]] = 'Zip code exceed maximum length';
        passed = false;
      } else if (entries[i][0] === 'zip' && entries[i][1] === '') {
        errors[entries[i][0]] = 'Required';
        passed = false;
      } else if (entries[i][0] === 'zip') {
        errors[entries[i][0]] = '';
      }
      if (entries[i][0] === 'card' && entries[i][1].length !== 16) {
        errors[entries[i][0]] = 'Credit card must be 16 digits.';
        passed = false;
      } else if (entries[i][0] === 'card' && entries[i][1] === '') {
        errors[entries[i][0]] = 'Required';
        passed = false;
      } else if (entries[i][0] === 'card') {
        errors[entries[i][0]] = '';
      }

    }
    this.setState({ errors });
    if (passed) {
      alert('Success! Thanks for using my Demo. My contact info is: NJStrebig@gmail.com or 949-422-4472');
    }
    return passed;
  }

  render() {
    const mainView = this.state.view.name;
    let mainPage;

    if (mainView === 'details') {
      mainPage = <ProductDetails product={this.state.products} view={this.state.view} params={this.state.view.params} setView={this.setView} addToCart={this.addToCart}/>;
    } else if (mainView === 'catalog') {
      mainPage = <ProductList products={this.state.products} setView={this.setView} addToCart={this.addToCart}/>;
    } else if (mainView === 'summary') {
      mainPage = <CartSummaryItem delete={this.deleteACartItem.bind(this)} totalPrice={this.state.totalPrice} updateTotalPrice={this.updateTotalPrice} view={this.state.view} setView={this.setView} products={this.state.products} cartItem={this.state.cart}/>;
    } else if (mainView === 'checkout') {
      mainPage = <Checkout delete={this.deleteACartItem.bind(this)} errors={this.state.errors} totalPrice={this.state.totalPrice} placeOrder={this.placeOrder} view={this.state.view} setView={this.setView} products={this.state.products} cartItem={this.state.cart}/>;
    }
    return (
      <div>
        <Header params={this.state.view.params} setView={this.setView} cartCount={this.state.cart.length}/>
        {mainPage}
      </div>
    );
  }
}
