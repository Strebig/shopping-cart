import React from 'react';

export default class Checkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        card: '',
        shippingAddress: ''
      }
    };
  }

  handleInputChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    var user = this.state.user;
    user[name] = value;
    this.setState({ user });
  }

  handleView(e) {
    this.props.setView('catalog', { 'id': '' });
  }

  render() {
    return (
      <div className="container ">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className="nav-link active" href='#' onClick={this.handleView.bind(this)}>Back to Catalog</a>
            </li>
          </ul>
        </div>
        <div className="checkoutForm">
          <div className="row">
            <div className="col-12 form-group">
              <label htmlFor="name">Name</label>
              <input className="form-control" type="text" id="name" name="name" onChange={this.handleInputChange.bind(this)} value={this.state.user.name}/>
            </div>
            <div className="col-12 form-group">
              <label htmlFor="card">Credit Card</label>
              <input className="form-control" type="text" id="card" name="card" onChange={this.handleInputChange.bind(this)} value={this.state.user.card}/>
            </div>
            <div className="col-12 form-group">
              <label htmlFor="shippingAddress">Shipping Address</label>
              <input className="form-control" type="text" id="shippingAddress" name="shippingAddress" onChange={this.handleInputChange.bind(this)} value={this.state.user.shippingAddress}/>
            </div>
            <div className="col-12 form-group ">
              <button className="btn btn-success placeOrder" onClick={e => this.props.placeOrder(this.state.user)} >Place Order</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
