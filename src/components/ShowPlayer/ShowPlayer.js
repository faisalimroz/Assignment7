import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './ShowPlayer.css'

const ShowPlayer = ({player,handleCartClick}) => {
    const {name,img,price}=player
   
    return (
        <div className='showplayer'>
            
            <img src={img} alt=""></img>
            <h1>name:{name}</h1>
            <h2>Salary:{price}</h2>
            <button className="btn" onClick={()=>handleCartClick({player})}><p>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default ShowPlayer;