import PropTypes from "prop-types";
import "./bottole.css";
const Cart = ({ cart, handleRemoveFormCart }) => {
  return (
    <div>
      <h2>Cart: {cart.length}</h2>
      <div>
        {
            cart.map(bottle => <div key={bottle.id} style={{display: "inline-flex"}}>
                <div>
                <img className="cartImg" src={bottle.img}></img> <br />
                <button onClick={() => handleRemoveFormCart(bottle.id)}>Remove</button>
                </div>


            </div> )
        
        }
      </div>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFormCart: PropTypes.func.isRequired,
};

export default Cart;

// cart.map((bottle) => (
//     <div key={bottle.id} className="cartImgDiv">
//       <img className="cartImg" src={bottle.img}></img>
//       <button onClick={() => handleRemoveFormCart(bottle.id)}>
//         Remove
//       </button>
//     </div>
//   ))