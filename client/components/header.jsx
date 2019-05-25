import React from 'react';

export default class Header extends React.Component {

  checkOut(e) {
    this.props.setView('summary', {});
  }

  render() {
    return (
      <div className="container-fluid row">
        <div className='col-sm-10'>
          <h1 className="fab fa-pied-piper-alt"> Wicked Sales</h1>
        </div>
        <div className='col-sm-2'>
          <h2 className='fas fa-shopping-cart' onClick={this.checkOut.bind(this)}>{this.props.cartCount}</h2>
        </div>
      </div>
    );
  }
}
