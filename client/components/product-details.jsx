import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount(props) {
    fetch('/api/products.php?id=1')
      .then(id => id.json())
      .then(id => {
        this.setState({ product: id });
      });
  }

  render() {
    // if (this.state.product) {
    //     return (
    //     <div className="container">
    //       <div className="row">
    //         {this.state.product}
    //       </div>
    //     </div>
    //    );
    // }
    return 'TESTING TESTING ONE TWO THREE';
  }
}
