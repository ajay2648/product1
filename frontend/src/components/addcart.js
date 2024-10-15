import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './addcart.css';

const AddCart = () => {
  const location = useLocation();
  const { product } = location.state || {};

  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (product) {
      const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
        setQuantity(cartItems[existingProductIndex].quantity);
      } else {
        setQuantity(0);
      }
    }
  }, [product, cartItems]);

  const handleAddToCart = () => {
    if (!product) {
      alert('No product selected');
      return;
    }

    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product already exists in the cart, increment its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity = (updatedCartItems[existingProductIndex].quantity || 0) + 1;
      setCartItems(updatedCartItems);
    } else {
      // If the product does not exist in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    alert(`Item added to cart: ${product.name}`);
  };

  return (
    <div className="add-cart-page">
      <h2>Item Added to Cart</h2>
      {product ? (
        <div>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} className="product-image" />
          <p>Price: {product.price}</p>
          <p>
            Quantity: {quantity}
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
          </p>
          <p>The item has been added to your cart.</p>
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Buy Now
          </button>
          <Link to="/addcart">Continue Shopping</Link>
        </div>
      ) : (
        <p>No item added to cart.</p>
      )}
    </div>
  );
};

export default AddCart;