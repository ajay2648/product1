import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ProductList.css"
<h1>Your Orders</h1>

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('There was an error fetching the products!', error);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCancelOrder = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-list">
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price.toFixed(2)}</p><br></br>
              <button
                className="add-to-cart"
                onClick={() => alert(`You have taken an order for ${product.name}!`)}
              >
                Take Order
              </button><br></br>
              <br></br>
              <button
                className="buy-Now"
                onClick={() => handleCancelOrder(product._id)}
              >
                Cancel Order
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;