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
        <h3 className='red text-center'><b>***FOR DEMO PURPOSES ONLY***</b></h3>
        <div className="checkoutForm">
          <div className="row">
            <div className="col-6 offset-3 form-group">
              <label htmlFor="fullName"><b>Full Name</b></label>
              <input className="form-control" type="text" id="fullName" name="fullName" onChange={this.handleInputChange.bind(this)} value={this.state.user.name}/>
              <small className="text-danger">{this.props.errors.fullName}</small>
            </div>
            <div className="col-6 offset-3 form-group">
              <label htmlFor="shippingAddress"><b>Shipping Address</b></label>
              <input className="form-control" type="text" id="address" name="address" onChange={this.handleInputChange.bind(this)} value={this.state.user.address}/>
              <small className="text-danger">{this.props.errors.address}</small>
            </div>
            <div className="col-6 offset-3">
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="city" className='col-12'>City</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="state" className='col-12'>State</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="zip" className='col-12'>Zip</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 offset-3">
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <input className="form-control col-12" type="text" id="city" name="city" onChange={this.handleInputChange.bind(this)} value={this.state.user.city}/>
                      <small className="text-danger">{this.props.errors.city}</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <select className="form-control col-12" name="state" id="state" onChange={this.handleInputChange.bind(this)} value={this.state.user.state}>
                        <option value="">Select a State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                      <small className="text-danger">{this.props.errors.state}</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <input className="form-control col-12" type="number" id="zip" name="zip" onChange={this.handleInputChange.bind(this)} value={this.state.user.zip}/>
                      <small className="text-danger">{this.props.errors.zip}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 offset-3 form-group">
              <label htmlFor="card"><b>Credit Card</b></label>
              <input className="form-control" type="number" id="card" name="card" onChange={this.handleInputChange.bind(this)} value={this.state.user.card}/>
              <small className="text-danger">{this.props.errors.card}</small>
            </div>
            <div className="col-12 form-group text-center">
              <h4 className='red text-center'><b>Your Total Cost is: ${this.props.totalPrice}</b></h4>
            </div>
            <div className="col-12 form-group text-center">
              <button className="btn btn-success placeOrder" onClick={e => this.props.placeOrder(this.state.user)} >Place Order</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
