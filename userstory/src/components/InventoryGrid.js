import React, { useState, useEffect } from "react";
import '../App.css'
import { Button } from '@mui/material'
import { InventoryData } from './InventoryData'






function InventoryGrid(){
return(

  <div className='FoodGrid'>
   
    <div className='LoginButtons'>
    <Button variant="contained" href="https://3000-zaynahahmad-userstory-yksre0a3h45.ws-us54.gitpod.io">Shopping Cart</Button>
    <Button variant="contained">Sign Up</Button>
    </div>
    <html>
    <head>
    <style>
    </style>
    </head>
    <body>
    
    
    <div class="grid-container">
     
      <div class="grid-item" >Item Name</div>
      <div class="grid-item">Amount Left</div>
      <div class="grid-item">Amount Needed</div>  
      <div class="grid-item">How Much More Is Needed</div>
      
    </div>
    
    </body>
    </html>

  </div>
  
)

}


export default InventoryGrid

