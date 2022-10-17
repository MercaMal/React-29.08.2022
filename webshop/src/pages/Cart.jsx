import { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "../css/Cart.module.css";

function  Cart () {
const [cart, setCart] = useState (JSON.parse(localStorage.getItem("cart")) || [] );
 const remove = (index)=> {
    cart.splice(index,1);
    setCart(cart.slice ());
    localStorage.setItem("cart", JSON.stringify(cart));
}
const calculateCartSum = ()=>{
    let cartSum = 0;
    cartSum.forEach(element => cartSum + element.product.price*element.quantity);
    return cartSum
}
const decreaseQuantity = (productIndex) => {
     cart[productIndex].quantity = cart[productIndex].quantity - 1;
     setCart(cart.slice());
}
const increaseQuantity = (productIndex) => {
    cart[productIndex].quantity = cart[productIndex].quantity + 1;
    setCart(cart.slice());
}

return ( 
    <div>
     {cart.map((element, index)=>
      <div key={index} className={styles.product}> 
        <img src={element.product.image} alt=""/>
        <div className={styles.name}>{element.product.name}</div>
        <div className={styles.price}>{element.product.price} £ </div>
        <button onClick={()=>decreaseQuantity(index)}>+</button>
        <div className={styles.quantity}>{element.quantity} tk</div>
        <button onClick={()=>increaseQuantity(index)}>-</button>
        <div className={styles.sum}>{(element.product.price*element.quantity).toFixed(2)} £ </div>

        <Button onClick={()=>remove(index)} variant= "danger">Kustuta</Button>
        </div>  
        )}
    <div> Kokku: {calculateCartSum} £</div>
    
    </div> );
}

export default  Cart ;