import React from 'react';
import { NavbarBrand, Navbar } from 'reactstrap';

export default class Header extends React.Component {

  checkOut(e) {
    this.props.setView('summary', {});
  }

  render() {
    return (
      <Navbar color="dark" dark>
        <NavbarBrand href="#">AS SEEN ON TV!</NavbarBrand>
        <NavbarBrand className='fas fa-shopping-cart cart' href='#' onClick={this.checkOut.bind(this)}>
            x{this.props.cartCount}
        </NavbarBrand>
      </Navbar>
    );
  }
}
