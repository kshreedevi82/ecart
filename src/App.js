import logo from './logo.svg';
import './App.css';
import React, { useState} from "react";
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import { Route ,Routes,BrowserRouter as Router} from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Shop from './component/Shop';
import Cart from './component/Cart';
import Terms from './component/Terms';
import Card from './component/Card';



function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    // if (cart.indexOf(item) !== -1) return;
    // setCart([...cart, item]);
    const itemExists = cart.find((cartItem) => cartItem.id === item.id);

    if (itemExists) {
      setCart(cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...itemExists, amount: itemExists.amount + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, amount: 1 }]);
    }
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <Router>
      <Navbar  /> 
      
      <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop  handleClick={handleClick} />} />
          <Route path="/cart" element={<Cart  cart={cart} setCart={setCart} handleChange={handleChange}/>} />
          <Route path="/term" element={<Terms  />} />
          <Route
          path="/card"
          render={(props) => <Card {...props} handleClick={handleClick} />}
        />
      
        </Routes>
       
    </Router>
  );
}

export default App;
