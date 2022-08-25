import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowRight, faCoffee, faDeleteLeft, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Shop.css'

const Shop = () => {
   
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product]
        setCart (newCart);
    }

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                         key={product.id}
                         product = {product}
                         handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Order Summary </h1>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${}</p>
                <p>Total Shipping Cost: ${}</p>
                <p>Tax: {}</p>
                <p><h3>Grand Total: ${}</h3></p>
                <button id='clear-cart'>Clear Cart  <FontAwesomeIcon icon={faTrash}> </FontAwesomeIcon></button>
                <button id = 'order-review'>Review Order  <FontAwesomeIcon icon={faArrowRight}> </FontAwesomeIcon> </button>
            </div>
            
        </div>
    );
};

export default Shop;