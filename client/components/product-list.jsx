import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {

  render() {
    const product = this.props.products.map(products => {
      return (
        <ProductListItem
          products = {products}
          image = {products.image}
          key = {products.id}
          setView = {this.props.setView}
        />
      );
    });

    return (
      <div className="container">
        <div className="row ">
          {product}
        </div>
      </div>
    );
  }
}
