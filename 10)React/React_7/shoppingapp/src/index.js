import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

class Cart extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.Itemname}</td>
        <td>{this.props.Price}</td>
      </tr>
    );
  }
}

class OnlineShopping extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      { Itemname: 'Laptop', Price: 80000 },
      { Itemname: 'TV', Price: 120000 },
      { Itemname: 'Washing Machine', Price: 50000 },
      { Itemname: 'Mobile', Price: 30000 },
      { Itemname: 'Fridge', Price: 70000 },
    ];
  }

  render() {
    return (
      <div className="shopping-wrapper">
        <h1 className="shopping-title">Items Ordered :</h1>
        <table className="shopping-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.items.map((item, index) => (
              <Cart key={index} Itemname={item.Itemname} Price={item.Price} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<OnlineShopping />);
