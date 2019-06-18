import React from 'react';
import { Row, Col, NavbarBrand } from 'reactstrap';

export default class Header extends React.Component {

  checkOut(e) {
    this.props.setView('summary', {});
  }

  render() {
    return (
      <Row className='header '>
        <Col >
          <NavbarBrand href='/' >
            <h1 className='titleText'>Wicked Sales</h1>
          </NavbarBrand>
        </Col>
        <Col className='col-3 ' >
          <NavbarBrand href='#' onClick={this.checkOut.bind(this)}>
            <h1 className='fas fa-shopping-cart cart'>{this.props.cartCount}</h1>
          </NavbarBrand>
        </Col>
      </Row>
    );
  }
}
