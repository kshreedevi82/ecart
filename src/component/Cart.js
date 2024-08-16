import React, { useState, useEffect } from "react";



const Cart = ({ cart=[], setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  },[cart]);

  return (
    <article>
      {cart.length === 0 ? (
        <p style={{textAlign:"center"}}><h2>Your cart is empty!!</h2></p>
      ) : (
      cart.map((item) => (
        <div className="cart_box" key={item.id} >
          <h1>My Cart</h1>
          <table border={3} width={1500} >
            <tr><td style={{textAlign:"center"}}>IMAGE</td><td style={{textAlign:"center"}}>TITLE</td><td style={{textAlign:"center"}}>QUANTITY</td><td style={{textAlign:"center"}}>PRICE</td><td style={{textAlign:"center"}}>REMOVE</td></tr>
            <tr>
          <td style={{textAlign:"center",border:2}} ><div className="cart_img">
            <img src={item.images[0]} alt=""  width={100} height={100}/>
            
          </div></td>
          <td style={{textAlign:"center" ,border:2}} ><div><p>{item.title}</p></div></td>
          <td style={{textAlign:"center" ,border:2}} ><div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div></td>
          <td style={{textAlign:"center" ,border:2}} ><div>
            <span>{item.price}</span></div></td>
            
            <td style={{textAlign:"center" ,border:2}} ><div><button onClick={() => handleRemove(item.id)}>Remove</button></div></td>
          </tr>
          <tr><td><div className="total" style={{textAlign:"center"}} >
        <span>SUBTOTAL&nbsp;&nbsp;</span>
        <span>&#8377; - {price}</span>
      </div></td></tr></table>
        </div>
      ))
    )}
      
    </article>
  );
};

export default Cart;
