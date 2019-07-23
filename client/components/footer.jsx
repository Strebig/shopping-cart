import React from 'react';
export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer mt-4 py-3 text-center bg-dark light fixed-bottom">
        <div className="container">
          <span className="text-light">This site is for demo purposes only.</span>
        </div>
      </footer>
    );
  }
}
