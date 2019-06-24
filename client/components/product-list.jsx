import React from 'react';
import ProductListItem from './product-list-item';
import { Container, Row } from 'reactstrap';

export default class ProductList extends React.Component {

  render() {
    const product = this.props.products.map(currentItem => {
      return (
        <ProductListItem
          product = {currentItem}
          image = {currentItem.image}
          key = {currentItem.id}
          setView = {this.props.setView}
          addToCart = {this.props.addToCart}
        />
      );
    });

    return (
      <Container>
        <Row className='offset-1'>
          {product}
        </Row>
      </Container>
    );
  }
}
