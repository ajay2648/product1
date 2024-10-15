import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './add.css';

const Tshirt = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { name: 'Burger', image: 'https://th.bing.com/th/id/OIP.NQFbu2E8mv3FxFjUL5Q0zAHaF-?w=241&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7', price: '$10.00' },
    { name: 'French Fries', image: 'https://th.bing.com/th/id/OIP.L2d5RE0P8lSvcju5dNecBwHaGq?w=204&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7', price: '$3.50' },
    { name: 'Fried Chicken', image: 'https://th.bing.com/th/id/OIP.icxsJOu16FSI9-UCGSD72QHaF7?w=238&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7', price: '$7.00' },
    { name: 'Fried rice', image: 'https://th.bing.com/th/id/OIP.yrkqJ5dOt4pekX3oWCerIgHaHa?w=241&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7', price: '$4.00' },
    { name: 'Fish Fingers', image: 'https://th.bing.com/th/id/OIP.TRQg5YWr1B7EMDlLs3e1YAHaE7?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', price: '$4.00' },
    { name: 'Tandoori', image: 'https://th.bing.com/th/id/OIP.uoKzFQZN4RIl57DzQLWmdgHaE7?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7', price: '$4.00' },




  ];
  


  const navigate = useNavigate();

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    navigate('/addcart', { state: { product, cartItems: updatedCart } });
  };

  return (
    <div className="category-page">
      <h2>SPECIAL-MENU</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className={`product-item ${product.name.replace(/\s+/g, '-').toLowerCase()}`}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className={`action-buttons ${product.name.replace(/\s+/g, '-').toLowerCase()}-actions`}>
              <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tshirt;
