import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import AdminAddProduct from './components/AdminAddProduct';
import Tshirt from './components/add';
import AddCart from './components/addcart';
import Home from './components/home';
import Login from './components/l1';
import Signup from './components/l2'
import './App.css';

const isAdmin = true;

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/l1">Login</Link></li>
            <li><Link to="/l2">signup</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/tshirt">Menu</Link></li>
            <li><Link to="/product">Order List</Link></li>
            {isAdmin && <li><Link to="/admin">Details</Link></li>}
          </ul>
        </nav>
        <Routes>
          <Route path="/l1" element={<Login />} />
          <Route path="/l2" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/tshirt" element={<Tshirt />} />
          <Route path="/addcart" element={<AddCart />} />
          {isAdmin ? (
            <Route path="/admin" element={<AdminAddProduct />} />
          ) : (
            <Route path="*" element={<Navigate to="/product" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;