import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';

import ShowPlayer from '../ShowPlayer/ShowPlayer';

import './Player.css'

const Player = () => {
   const [Players,setPlayers]=useState([]);
   const [cart, setCart]=useState([])
   
   useEffect(()=>{
      fetch('player.json')
      .then(res=>res.json())
      .then(data=>setPlayers(data))
    },[]
    ) 
   
   
      const handleCartClick=(player)=>{
      // console.log(player)
      const newCart=[...cart,player]
      setCart(newCart)
      
     }
   
   
     return (
      <div className='container'>
           <div className='player-container'>
            {
              Players.map(player=><ShowPlayer key={player.id}
              player={player}
              handleCartClick={handleCartClick}> </ShowPlayer>)
            }
          </div>
          <div className='cart-container'>
             <h1>cart:{cart.length}</h1>
             <Carts cart={cart}></Carts>
             
            
          </div>
      </div>
       
       
   );
   
   }
   
     


export default Player;