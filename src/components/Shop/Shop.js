import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDB, getStoredItems } from '../../utilities/manageDB';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useCart from '../../hooks/useCart';



const Shop = () => {
   
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    // const [displayProducts, setDisplayProducts] = useState([])
    let size = 9;
    
    const handleAddToCart = (product) => {
        // console.log(product);
        let newCart = []

        const exist = cart.find(pd=> pd.id=== product.id);
        if(exist){
            exist.quantity = exist.quantity+1;
            const rest = cart.filter(pd=> pd.id !== product.id);
            newCart = [...rest, product]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDB(product.id)
    }

    useEffect( () => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
        .then(res => res.json())
        .then(data => 
            {setProducts(data.products);
            // setDisplayProducts(data);
            const count = Math.ceil(data.count/size);
            setPageCount(count);
            
        })
    },[page])


    // const handleSearch = (event) => {
    //     const searchText = event.target.value;
    //     const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
    //     setDisplayProducts(matchedProducts)
    //     setProducts(displayProducts)
    // }

    return (
        <div>
            {/* <div>
                <input type="text" name="" onChange = {handleSearch} id="input-field" placeholder='Search ' />
            </div> */}
        <div className="shop-container">
           
            <div>
                    <div className="products-container">

                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    </div>
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number=>
                            <button
                             key={number}
                             className={number===page?"selected":" "}
                             onClick={()=>setPage(number)}
                            >{number+1}
                            </button>)
                        }
                    </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to='/orders'>
                            <button  id = 'order-review'>Review Order  <FontAwesomeIcon icon={faArrowRight}> </FontAwesomeIcon> </button>
                </Link> 
                </Cart>
            </div>
            
        </div>
        </div>
    );
};

export default Shop;
