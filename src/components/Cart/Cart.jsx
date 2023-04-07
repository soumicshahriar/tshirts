import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRamoveCart}) => {
 let message;
 if (cart.length===0){
  message = <p>Please add some products</p>
 }
 else{
  message=<p><small>Thanks for your order Sir</small></p>
 }
 return (
  <div className='sticky'>
   <h3 className={cart.length===1 ? "blue": "red"}>Order Summery: {cart.length}</h3>
   <p className={`bold bordered ${cart.length===3 ? 'yellow' : "cadetblue"}`}>Something</p>
   {/* 2 */}
   {cart.length<2? <span className='orange'>buy more....</span>:<span>You have fulfiled the condition you can buy more if you want</span>}
   {/* 1 */}
   {message}
   {
    cart.map(tshirt=><p key={tshirt._id}>{tshirt.name} <button onClick={()=>handleRamoveCart(tshirt._id)}>X</button></p>)
   }
   {/* 3 */}
   {
    cart.length===2 && <p>double bananza</p>
   }
   {/* 4 */}
   {
    cart.length ===3 || <h3>Tinta to hoilo na</h3>
   }
  </div>
 );
};

export default Cart;

/**
 * 1.conditional rendering using if else
 * 2. ternery operator rendering: condition ? 'true':'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4/Lofical || (if the condition is false then the next things will be desplalyed)
 */
/**
 * CONDITIONNAL CSS CLASS
 *  */ 