import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import styles from "../css/Cart.module.css";


function  Cart () {
const [cart, setCart] = useState (JSON.parse(localStorage.getItem("cart")) || [] );
const [parcelMachines, setParcelMachines] = useState ([]); // []-tähistavad hetke, millal ta saab asjad kätte, 
const pmRef = useRef();                                                               //tühi massiiv hetkel. 0-0,5 sek on asi tühi
                                                                              //panakse loaderid käima, kui asi lõppeb, siis loader kaob.
                                                                              // seni kuni laeb, siis on tühi, kui kandilist tühja ei pane, siis tuleb error 

 useEffect(()=> {
 fetch("https://www.omniva.ee/locations.json") //päringu tegemine lehele
 .then(res => res.json()) // pane ta json kujule
 .then(json => setParcelMachines(json)) //saan json kujule, siis json setParcelMachine ja see omakorda lähen parcelMachine sisse
}, [])


 const remove = (index)=> {
    cart.splice(index,1);
    setCart(cart.slice ());
    localStorage.setItem("cart", JSON.stringify(cart));
}
const calculateCartSum = ()=>{
    let cartSum = 0;
    cart.forEach(element => cartSum =cartSum + element.product.price*element.quantity);
    return cartSum.toFixed(2);
}
const decreaseQuantity = (productIndex) => {
     cart[productIndex].quantity = cart[productIndex].quantity - 1;
     setCart(cart.slice());
}
const increaseQuantity = (productIndex) => {
    cart[productIndex].quantity = cart[productIndex].quantity + 1;
    setCart(cart.slice());
}
 const sendOrder = () => {
    console.log(pmRef.current.value);
    console.log(cart);
 }
return ( 
    <div>
     {cart.map((element, index)=>
      <div key={index} className={styles.product}> 
        <img src={element.product.image} alt=""/>
        <div className={styles.name}>{element.product.name}</div>
        <div className={styles.price}>{element.product.price} £ </div>
        <div className={styles.quantity}>
          <img className={styles.button} onClick={()=>decreaseQuantity(index)} src={require("../images/minus.png")} alt=""/>
          <div>{element.quantity} tk</div>
          <img className={styles.button} onClick={()=>increaseQuantity(index)}src={require("../images/plus.png")} alt=""/>
        </div>
        
        <div className={styles.sum}>{ (element.product.price*element.quantity).toFixed(2)} £ </div>
        <img className={styles.button} onClick={()=>remove(index)}src={require("../images/x.png")} alt=""/>
        </div>  
        )}
   <div className={styles.cart__bottom}>
   <div> Kokku: {calculateCartSum()} £</div>

  <select ref={pmRef}>{parcelMachines
  .filter(element => element.A0_NAME === "EE")
 .map(element=>
 <option key={element.NAME}>{element.NAME}</option>)}
 </select>

 <button onClick={sendOrder}>Vormista tellimus</button>
 


   </div>
    </div> );
}

export default  Cart ;
/* oskad kommunikeerida, rääkida arendajatega
 /* udemist trikke juurde vaadata
 /* kui cssi impordin, siis kehtib üle terve projekti
 /* .module on arendajatele justkui märksõna. iga faili sjaoks on üks css
 /* moodul. ilma mooduliteta on ta igas failis*/