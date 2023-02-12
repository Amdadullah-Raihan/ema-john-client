import { useEffect } from "react";
import { useState } from "react"
import { getStoredItems } from "../utilities/manageDB";


const useCart = () => {
   
    const [cart, setCart] = useState([]);


    
    useEffect(()=>{
        const savedCart = getStoredItems();
        const keys = Object.keys(savedCart)
        // console.log(keys);
        fetch('http://localhost:5000/products/bykeys', {
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(products => {
            console.log(products);
            if(products.length){
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
        })

    },[])

    return[cart, setCart]


   }
   export default useCart;