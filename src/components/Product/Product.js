import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    
    const {img,name,seller,price,ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
    // console.log(props);

    return (
        <div className='product'>
            <img src={img} alt=""/>
             <div className="product-info">
                <p id='product-name'>{name}</p>
                <p id='product-price'>Price: ${price}</p>
                <p id='product-seller'><small>Manufacturar: {seller}</small></p>
                <p id='product-ratings'><small>Ratings: {ratings} stars</small></p>
             </div>
            <button className='product-btn' onClick={() => handleAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon></button>
        </div>
    );
};

export default Product;