import { useEffect } from "react";
import { useState } from "react"
import { getStoredItems } from "../utilities/manageDB";

const useCart = (products) => {
   
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        if(products.length){
            const savedCart = getStoredItems();
            let storedCart = [];
            for(const id in savedCart){
                const addedProduct = products.find(product => product.id === id);
                if(addedProduct){
                    let quantity = savedCart[id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
                
            }
            setCart(storedCart)
        }

    },[products])

    return[cart, setCart]


   }
   export default useCart;