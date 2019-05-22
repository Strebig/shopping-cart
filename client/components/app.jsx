import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.getProducts = this.getProducts.bind(this);
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products.php')
      .then(products => products.json())
      .then(products => {
        this.setState({ products });
      });
  }

  setView(name, params) {
    this.setState({
      view: {
        name,
        params
      }
    });
  }

  render() {
    const mainView = this.state.view.name;
    let mainPage;

    if (mainView === 'details') {
      mainPage = <ProductDetails view={this.state.view} params={this.state.view.params} setView={this.setView}/>;
    } else if (mainView === 'catalog') {
      mainPage = <ProductList products={this.state.products} setView={this.setView}/>;
    }
    return (
      <div>
        <Header />
        <div className='row-sm-4'>
          {mainPage}
        </div>
      </div>
    );
  }
}
