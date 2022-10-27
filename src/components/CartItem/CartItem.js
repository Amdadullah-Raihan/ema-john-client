import React from 'react';
import './CartItem.css'
import {faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CartItem = (props) => {
    const {name,price, quantity, img, id} = props.item;
    const {handleRemoveItem} = props;
    
    return (
        <div className='cart-item'>
           
             <div className='single-item'>
                <p id='title'>
                    <img id='img' src={img} alt="" />
                    <p>{name}</p>
                </p>
                <p>{quantity}</p>
                <p>{price}</p>
                <p id='price'>
                    {price*quantity}
                    <button onClick={()=> handleRemoveItem(id)} id='remove-item-btn'><small id='remove-item-btn-text'>Remove Item</small> <small> <FontAwesomeIcon icon={faTrash}> </FontAwesomeIcon>  </small></button>

                </p>
              

             </div>
            
            
           
        </div>
    );
};

export default CartItem;