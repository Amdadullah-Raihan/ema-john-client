const addToDB = id => {
  const exist = localStorage.getItem('shopping_cart');
  let shopping_cart ={}
  if(!exist){
    shopping_cart[id] = 1;
  }
  else{

    shopping_cart = JSON.parse(exist);

    if(shopping_cart[id]){
      
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    }
    else{
      shopping_cart[id] = 1;
    }
  }
  localStorage.setItem("shopping_cart", JSON.stringify(shopping_cart))
}
const clearCart = () => {
  localStorage.removeItem('shopping_cart');
  
}
const getStoredItems = ()=> {
  
  const storedItems = localStorage.getItem("shopping_cart");
  const storedItemsO = JSON.parse(storedItems)
  return storedItemsO;
  console.log(storedItemsO)
   
}
export{
  addToDB,
  getStoredItems,
  clearCart
}