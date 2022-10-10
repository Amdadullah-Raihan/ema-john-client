import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons'
import { clearCart } from '../../utilities/manageDB';

const Cart = ({cart}) => {

    // console.log(cart)

    let total = 0;
    let shipingCost = 0;
    let tax = 0;
    let grandTotal = 0;
    let totalQuantity = 0;

    for( const product of cart){
       
        if(!product.quantity){
            product.quantity = 1; 
        }
        totalQuantity = totalQuantity + product.quantity;
        console.log(totalQuantity)
        total = total + product.price * product.quantity;
        shipingCost = shipingCost + product.shipping;
        tax = parseFloat((total*0.1).toFixed(2));
        grandTotal = total + shipingCost + tax;
        
    }
    
    const handleClearCart = () =>{
        clearCart();
        console.log("clicked")
    }

    return (
        <div className='cart'>
            <h1>Order Summary </h1>
                <p>Selected Items: {totalQuantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Cost: ${shipingCost}</p>
                <p>Tax: ${tax}</p>
                <p><big>Grand Total: ${grandTotal}</big></p>
                <button id='clear-cart' onClick={()=>handleClearCart()}>Clear Cart  <FontAwesomeIcon icon={faTrash}> </FontAwesomeIcon></button>
                <button id = 'order-review'>Review Order  <FontAwesomeIcon icon={faArrowRight}> </FontAwesomeIcon> </button>
        </div>
    );
};

export default Cart;