import React, { useState } from 'react';

import './Carts.css'

const Carts = ({cart}) => {
  

 console.log(cart)
  
 let salary=0;

 for(const p of cart){
     
    salary=parseFloat(p.player.price)+salary
  
   
   }


    return (
        
        <div className='carts'>
             <div className='cruk'>
              
              
              {
              cart.map(ts=> <p>Name: {ts.player.name} </p> ) 
              }
            </div>
            
         
            

            <h2>Salary:{salary}</h2>
       
        </div>
        
    );
};

export default Carts;