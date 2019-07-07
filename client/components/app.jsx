import React from 'react';
import Header from './header';
import Footer from './Footer';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummaryItem from './cart-summary-item';
import Checkout from './checkout-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
      activeItem: {},
      modal: false,
      didCheckout: false,
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
    this.updateCart = this.updateCart.bind(this);
    this.setView = this.setView.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.updateTotalPrice = this.updateTotalPrice.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
  }

  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleSuccess() {
    this.setState(prevState => ({
      didCheckout: !prevState.didCheckout
    }));
  }

  setActiveItem(event) {
    event.preventDefault();
    let id = event.currentTarget.dataset.id;
    let item = this.state.cart.find(o => o.id == id);
    this.setState({
      activeItem: item,
      modal: true
    });
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

  addToCart(product, quantity) {
    quantity == '' ? quantity = 1 : quantity;
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...product, quantity })
    };
    fetch('/api/cart.php', req)
      .then(product => product.json())
      .then(cartItem => {
        let found = this.state.cart.find(o => o.id == cartItem.id);
        if (found) {
          let index = this.state.cart.indexOf(found);
          let quantity = parseInt(cartItem.quantity);
          let newQuantity = quantity += parseInt(found.quantity);
          found.quantity = newQuantity;
          let cart = this.state.cart;
          cart[index] = found;
          this.setState({ cart });
        } else {
          const allCartItems = this.state.cart.concat(cartItem);
          this.setState({ cart: allCartItems });
        }
      });
  }

  updateCart(index, quantity) {
    let cart = this.state.cart;
    let item = cart[index];
    item.quantity = quantity;
    cart[index] = item;
    this.setState({ cart }, () => this.getTotalPrice(cart));
  }

  deleteACartItem(e) {
    let id = e.target.dataset.id;
    let cart = this.state.cart;
    let found = cart.find(o => o.id === id);
    if (found) {
      let index = cart.indexOf(found);
      let quantity = parseInt(found.quantity);

      if (quantity > 1) {
        found.quantity--;
        cart[index] = found;
      } else {
        cart.splice(index, 1);
      }
      this.setState({ cart, modal: false }, () => this.getTotalPrice(cart));
    }
  }

  getTotalPrice(items) {
    let currentPrice = 0;
    for (let item of items) {
      currentPrice += (parseFloat(item.price) * parseInt(item.quantity));
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
        .then(order => order.json());
      this.setState({
        view: {
          name: 'catalog',
          params: {}
        },
        cart: [],
        didCheckout: true
      });
    }
  }

  calculateQuantity(items) {
    let total = 0;
    let length = items.length;
    for (let i = 0; i < length; i++) {
      total += parseInt(items[i].quantity);
    }
    return total;
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
    return passed;
  }

  render() {
    const mainView = this.state.view.name;
    let mainPage;

    if (mainView === 'details') {
      mainPage = <ProductDetails updateCart={this.updateCart} product={this.state.products} view={this.state.view} params={this.state.view.params} setView={this.setView} addToCart={this.addToCart}/>;
    } else if (mainView === 'catalog') {
      mainPage = <ProductList products={this.state.products} setView={this.setView} addToCart={this.addToCart}/>;
    } else if (mainView === 'summary') {
      mainPage = <CartSummaryItem delete={this.deleteACartItem.bind(this)} modal={this.state.modal} activeItem={this.state.activeItem} toggle={this.toggle} setActiveItem={this.setActiveItem} updateCart={this.updateCart} totalPrice={this.state.totalPrice} updateTotalPrice={this.updateTotalPrice} view={this.state.view} setView={this.setView} products={this.state.products} cart={this.state.cart}/>;
    } else if (mainView === 'checkout') {
      mainPage = <Checkout delete={this.deleteACartItem.bind(this)} errors={this.state.errors} totalPrice={this.state.totalPrice} placeOrder={this.placeOrder} view={this.state.view} setView={this.setView} products={this.state.products} cartItem={this.state.cart}/>;
    }
    return (
      <div>
        <Header params={this.state.view.params} setView={this.setView} cartCount={this.calculateQuantity(this.state.cart)}/>
        <Modal isOpen={this.state.didCheckout} toggle={this.toggleSuccess} id="success-modal" centered>
          <ModalHeader>
            <b>You successfully submitted your order!</b>
          </ModalHeader>
          <ModalBody >
            <h4>Contact Information</h4>
            <p>Name: Nick Strebig</p>
            <p>Phone: 949-422-4472</p>
            <p>Email: strebig.nick@gmail.com</p>
          </ModalBody>
          <ModalFooter>
            <Button color="outline-secondary" className="button-format text-center" onClick={this.toggleSuccess}>Ok, got it!</Button>
          </ModalFooter>
        </Modal>
        {mainPage}
        <Footer />
      </div>
    );
  }
}
