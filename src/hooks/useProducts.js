import { useEffect } from "react";
import { useState } from "react"

const useProducts = () =>{
    const [products, setProducts] = useState([]);
  
    useEffect(()=> {
       
        fetch('http://localhost:5000/products')
            .then(res=>res.json())
            .then(data=> setProducts(data.products))
            
    },[])
    return [products]
}
export default useProducts;