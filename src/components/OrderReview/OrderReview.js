import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearCart, removeFromDb } from '../../utilities/manageDB';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import './OrderReview.css'

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    
    const handleRemoveItem = (id) => {
        console.log(id)
        const newCart = cart.filter(product => product.id!==id)
        removeFromDb(id);
        setCart(newCart)
    }
    
    const handlePlaceOrder = () => {
        navigate('/place-order')
        setCart([]);
        clearCart();
    }

    return (
        <div className='order-review-container'>
            <div id="items-container">
                <h1>Track your orders </h1>
                <h3>You ordered {cart.length} individual items</h3>
                <h6 id='product-heading'>
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Total Price</p>
                </h6>
                <div>
                {
                    cart.map(cartItem=> <CartItem item={cartItem} handleRemoveItem={handleRemoveItem} ></CartItem>)
                }
                </div>
            </div>
            <div id='cart-container'>
                <div>

                    <Cart cart= {cart}>
                       
                            <button onClick={handlePlaceOrder}  id = 'order-review'>Place Order  <FontAwesomeIcon icon={faArrowRight}> </FontAwesomeIcon> </button>
                       
                    </Cart>
                   
                </div>
                
            </div>
        </div>
    );
};

export default OrderReview;