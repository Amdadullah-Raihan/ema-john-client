import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDB, getStoredItems } from '../../utilities/manageDB';



const Shop = () => {
   
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product]
        setCart(newCart);
        addToDB(product.id)
    }

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=> {
       
        if(products.length){
            const storedCart = getStoredItems()
            const savedCart = [];
            for(const id in storedCart){
            const addedProducts = products.find(product => product.id === id) 
            savedCart.push(addedProducts);
            }
            setCart(savedCart);
        }
    } ,[products])

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
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;