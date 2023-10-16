import React from 'react';
import { useSelector } from 'react-redux';
import PopupMenu from './PopupMenu';
import './Cart.css';
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className='Car'>
      <h1>
    <div className="rectangle4">
    <div className="heading4">GOALS</div>
    </div></h1>
    
    <div className='ca'>
    <ul> 
        {cartItems.map((item, index) => (
          <li  key={index}>{item.name}</li>
        ))}
        </ul>
      </div>
      <PopupMenu/>
    </div>
  );
};

export default Cart;