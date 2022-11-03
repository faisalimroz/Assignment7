import React, { useState } from 'react';

import './Carts.css'

const Carts = ({cart}) => {
  

 
  
 let salary=0;
 let name=''
 for(const p of cart){
     
    salary=parseFloat(p.player.price)+salary
    name = p.player.name
   
   }


    return (
        
        <div className='carts'>
             <div className='cruk'>
              
              <h1 className='name'>Name:{name}</h1>
              <button> click me</button>
            </div>
            
         
            

            <h2>Salary:{salary}</h2>
       
        </div>
        
    );
};

export default Carts;