import React from 'react';
import { NavbarBrand, Navbar } from 'reactstrap';

export default class Header extends React.Component {

  checkOut(e) {
    this.props.setView('summary', {});
  }

  handleView(e) {
    this.props.setView('catalog', { 'id': '' });
  }

  render() {
    return (
      <Navbar color="dark" dark>
        <NavbarBrand href="#" onClick={this.handleView.bind(this)} className="nav-header">AS SEEN ON TV!</NavbarBrand>
        <NavbarBrand className='fas fa-shopping-cart cart' href='#' onClick={this.checkOut.bind(this)}>
            <span className="ml-1 mr-1"><i className="fas fa-times fa-sm"></i></span><span className="cart-count">{this.props.cartCount}</span>
        </NavbarBrand>
      </Navbar>
    );
  }
}
