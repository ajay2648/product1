import React from 'react';
import Tshirt from './add';
import "./home.css"


const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h2>Restaurant Management System</h2>

        <p>Shop from a variety of food delivered to your door.</p>
      </section>
      <label for ="Tshirt">select dishes</label>
      <select id='Tshirt'>
        <option value={"vegetarian"}>vegetarian</option>
        <option value={"Non-vegetarian"}>Non-vegetarian</option>
        <option value={"Vegan"}>vegan</option>
      </select>
      <button className="btn-primary">
        <a className='a123' href='/tshirt'>Order Now</a>
      </button><br></br>
      <br></br>
      <div className='container'>
        <img src="https://th.bing.com/th?id=OIP.hR8hVpOKVDVsa9JTlX1lrAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>
        <img src="http://ts4.mm.bing.net/th?id=OIP.q89geiHgkZSzRTWx1q6vEAHaLH&pid=15.1"></img>
        <img src="https://th.bing.com/th/id/OIF.YvrjTirxS2MQSTIIeXGc9g?w=318&h=163&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img>
        <img src="https://th.bing.com/th/id/OIP.ZXLPCs_7NlKfIzxQiFN14QHaEK?w=315&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img>    
      </div>

      <section className="featured-dishes">
        <h3>Today's Specials</h3>
        <ul className="vertical-list">
          <li>
            <img src="https://th.bing.com/th/id/OIP.LLbE_Z1vHd0MYzUHLcHFqAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Dish 1" />
            <h4>Dish 1</h4>
            <p>Description of Dish 1</p>
          </li>
          <li>
            <img src="https://th.bing.com/th/id/OIP.pRgFPMaZodo-d_TMlajE0AHaE8?w=294&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Dish 2" />
            <h4>Dish 2</h4>
            <p>Description of Dish 2</p>
          </li>
        </ul>
      </section>

      <section className="customer-reviews">
        <h3>What Our Customers Say</h3>
        <ul className="vertical-list">
          <li>
            <img src="https://th.bing.com/th?id=OIP.DW2P6z68tINRZJbDZfZ2-gHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Customer 1" />
            <p>"Best food delivery service I've ever used!"</p>
          </li>
          <li>
            <img src="https://th.bing.com/th?id=OIP.ISeSJ7qnp59grWVg45qBQQHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Customer 2" />
            <p>"Fast delivery and delicious food. Highly recommend!"</p>
          </li>
          <li>
            <img src="https://th.bing.com/th?id=OIP.eSWA6aOnJ9_yKT0QoB_2LwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Customer 3" />
            <p>"I'm obsessed with their vegan options!"</p>
          </li>
        </ul>
      </section>
      <footer>
        <div class="footer-content">
          <p>&copy; 2024 Ajay Restaurant. All rights reserved.</p>
          <ul class="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
          <a href="https://instagram.com" target="_blank">Instagram</a>
        </div><br></br>
      </footer>

      {/* Other components */}
    </div>
  );
};

export default Home;