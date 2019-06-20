import React from 'react';
import { Row, Col, NavbarBrand } from 'reactstrap';

export default class Header extends React.Component {

  checkOut(e) {
    this.props.setView('summary', {});
  }

  render() {
    return (
      <Row className='header col-12'>
        <Col >
          <h1 className='titleText'>As Seen on T.V.!</h1>
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
