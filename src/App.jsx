import { useEffect, useState } from 'react'
import './App.css'
import Bottole from './Bottole';
import './bottole.css'
import { addTOLS, getStoreCard, removeFromLS } from './utilitie/localStorage';
import Cart from './Cart';

function App() {
  const [bottoles, setBottoles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() =>{
    fetch('bottle.json')
    .then(res => res.json())
    .then(data => setBottoles(data))
  },[])
  // Load cart from localStorage
  useEffect(() =>{
    // console.log('call the useEffect', bottoles.length);
    if (bottoles.length){
      const storedCart = getStoreCard();
      // console.log(storedCart, bottoles);
      const savedCart = [];
      for(const id of storedCart){
        // console.log(id);
        const bottle = bottoles.find(bottle => bottle.id === id);
        if(bottle){
          savedCart.push(bottle);
        }
      }
      // console.log('savedCart', savedCart);
      setCart(savedCart);

    }
  },[bottoles])
  const handleAddToCart = bottle =>{
    const newCart = [...cart, bottle];
    setCart(newCart);
    addTOLS(bottle.id );
  }
  const handleRemoveFormCart = id =>{
    const remainingCart = cart.filter(bottle => bottle.id !== id);
    setCart(remainingCart);
    // remove from Local Storage
    removeFromLS(id)

  }

  return (
    <>
    <h2>Bottles Available: {bottoles.length}</h2>  
    <Cart  cart={cart} handleRemoveFormCart={handleRemoveFormCart}></Cart>  
    <div className='bottole'>
      {
        bottoles.map(bottole => <Bottole
           key={bottole.id} 
           bottole={bottole}
           handleAddToCart={handleAddToCart}
           ></Bottole>)
      }

    </div>
     
    </>
  )
}

export default App
