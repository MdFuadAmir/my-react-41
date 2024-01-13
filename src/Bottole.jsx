import './bottole.css'
import PropTypes from 'prop-types';
const Bottole = ({bottole, handleAddToCart}) => {
    const {name, img, price, description} = bottole;
    return (
        <div className='bottl'>
            <h2>Name: {name}</h2>
            <img className='img' src={img} alt="Bottole.img" />
            <h4>Price: ${price}</h4>
            <p>{description}</p>
            <button onClick={() => handleAddToCart(bottole)}>Purchase</button>
            
        </div>
    );
};
Bottole.propTypes = {
    bottole: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottole;