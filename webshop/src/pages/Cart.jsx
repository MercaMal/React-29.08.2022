import { useState } from "react";
import Button from "react-bootstrap/Button";

function  Cart () {


const [cart, setCart] = useState (JSON.parse(localStorage.getItem("cart")) || [] );
 
const erase = (index)=> {
    cart.splice(index,1);
    setCart(cart.slice ());
    localStorage.setItem("cart", JSON.stringify(cart));
}



return ( 
    <div>
     {cart.map((element, index)=>
      <div>
        <img src={element.image} alt=""/>
        <div>{element.name}</div>
        <div>{element.price} £ </div>
        <Button onClick={()=>erase(element)} variant= "danger">Kustuta</Button>
        </div>  
        )}
    
    
    </div> );
}

export default  Cart ;