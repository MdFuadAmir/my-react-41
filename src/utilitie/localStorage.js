 const getStoreCard = () =>{
    const storeCardString = localStorage.getItem('cart');
    if(storeCardString){
        return JSON.parse(storeCardString);
    }
    return [];
 }

 const addTOLS = id =>{
    const cart = getStoreCard();
    cart.push(id);
    // Save To Local Storage
    saveCardToLS(cart);
 }
 const saveCardToLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
 }
 const removeFromLS = id =>{
   const cart = getStoreCard();
   // remove every same id
   const remaining = cart.filter(idx => idx !== id);
   saveCardToLS(remaining)
 }

 export { addTOLS, getStoreCard, removeFromLS}