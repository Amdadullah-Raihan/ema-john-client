import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {

console.log(cart)
    let total = 0;
    let shipingCost = 0;
    let tax = 0;
    let grandTotal = 0;

    for( const product of cart){
        total = total + product.price;
        shipingCost = shipingCost + product.shipping;
        tax = parseFloat((total*0.1).toFixed(2));
        grandTotal = total + shipingCost + tax;
    }
    

    return (
        <div className='cart'>
            <h1>Order Summary </h1>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Cost: ${shipingCost}</p>
                <p>Tax: ${tax}</p>
                <p><big>Grand Total: ${grandTotal}</big></p>
                <button id='clear-cart'>Clear Cart  <FontAwesomeIcon icon={faTrash}> </FontAwesomeIcon></button>
                <button id = 'order-review'>Review Order  <FontAwesomeIcon icon={faArrowRight}> </FontAwesomeIcon> </button>
        </div>
    );
};

export default Cart;