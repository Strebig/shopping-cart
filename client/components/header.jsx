import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <div className="container-fluid row">
        <div className='col-sm-10'>
          <h1>Wicked Sales Logo</h1>
        </div>
        <div className='col-sm-2'>
          <h2 className='fas fa-shopping-cart'>{this.props.cartCount}</h2>
        </div>
      </div>
    );
  }
}
