import React from 'react';

export default class Checkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        fullName: '',
        card: '',
        address: '',
        city: '',
        state: '',
        zip: ''
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
              <label htmlFor="fullName"><b>Full Name</b></label>
              <input className="form-control col-6" type="text" id="fullName" name="fullName" placeholder="Demo" onChange={this.handleInputChange.bind(this)} value={this.state.user.name}/>
            </div>
            <div className="col-12 form-group">
              <label htmlFor="shippingAddress"><b>Shipping Address</b></label>
              <input className="form-control col-6" type="text" id="address" name="address" placeholder="Demo" onChange={this.handleInputChange.bind(this)} value={this.state.user.address}/>
              <div className="row col-12">
                <label htmlFor="city" className='col-4'>City</label>
                <label htmlFor="state" className='col-4'>State</label>
                <label htmlFor="zip" className='col-4'>Zip</label>
              </div>
              <div className="row col-12">
                <input className="form-control col-4" type="text" id="city" name="city" placeholder="Demo" onChange={this.handleInputChange.bind(this)} value={this.state.user.city}/>
                <input className="form-control col-3" type="text" id="state" name="state" placeholder="Demo" onChange={this.handleInputChange.bind(this)} value={this.state.user.state}/>
                <input className="form-control col-3" type="text" id="zip" name="zip" placeholder="Demo" onChange={this.handleInputChange.bind(this)} value={this.state.user.zip}/>
              </div>
            </div>
            <div className="col-12 form-group">
              <label htmlFor="card"><b>Credit Card</b></label>
              <input className="form-control col-6" type="text" id="card" name="card" placeholder="FOR DEMO PURPOSES ONLY!" onChange={this.handleInputChange.bind(this)} value={this.state.user.card}/>
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
