import React from "react";
import list from "../data";

const Card = ({ item, handleClick }) => {
  const { title,  price, images,brand } = item;
  return (
    
    <div className="cards">  
        
      <div className="image_box">
      <div className="details">
      <img src={images[0]} alt="" />
        <p>{title}</p>
        <p>{brand}</p>
        <p>&#8377; {price}</p>
        <button onClick={() => handleClick(item)} className="btn">Add to Cart</button>
      </div>
    </div>
  
    </div>
  );
};

export default Card;

