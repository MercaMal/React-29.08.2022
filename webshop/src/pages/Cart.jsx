import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import styles from "../css/Cart.module.css";
import {Link} from 'react-router-dom';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


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
  const api = new WooCommerceRestApi({
  url: "https://localhost/wordpress/",
  consumerKey: "ck_c479a7e5e2f4058f5dd3aacac8ed17091013a3ed",
  consumerSecret: "cs_c881e311671be8b038fb92a9d08bad9073e470cd",
  queryStringAuth: true,
  version: "wc/v3",

  axiosConfig: {
    headers: {"Content-Type": "application/json"},
   }
   });
   const woocommerceCart = cart.map(element =>  {
    return {product_id: element.product.id, quantity: element.quantity}
  });
  console.log(woocommerceCart)
  api.post("orders",{"line_items":woocommerceCart})
  //.then(res=>console.log(res))
  .then(res => pay(res.data.id))
  }

   const pay = (orderId) => {
    const data = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": calculateCartSum(),
      "order_reference": orderId,
      "nonce": "a9b7f7easda2123" + Math.random() * 999999 + new Date(),
      "timestamp": new Date(),
      "customer_url": "https://react-09-22-v.web.app"
      }
      fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff",{
        "method": "POST",
        "body": JSON.stringify(data),
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
        }
      }).then(res => res.json())
      .then(json => window.location.href = json.payment_link );
 }

return ( 
    <div>
     {cart.map((element, index)=>
      <div key={index} className={styles.product}> 
        {/* <img src={element.product.image} alt=""/> */}
        { element.product.images[0] && <img className={styles.image} src={element.product.images[0].src} alt="" />}
        <div className={styles.name}>{element.product.name}</div>
        <div className={styles.price}>{element.product.price} £ </div>
        <div className={styles.quantity}>
          <img className={styles.button} onClick={()=>decreaseQuantity(index)} src={"/images/minus.png"} alt=""/>
          <div>{element.quantity} tk</div>
          <img className={styles.button} onClick={()=>increaseQuantity(index)}src={"/images/plus.png"} alt=""/>
        </div>
        
        <div className={styles.sum}>{  (element.product.price*element.quantity).toFixed(2)} £ </div>
        <img className={styles.button} onClick={()=>remove(index)}src={"/images/x.png"} alt=""/>
        </div>  
        )}

      { cart.length > 0 &&  
        <div className={styles.cart__bottom}>
       <div> Kokku: £{calculateCartSum()}</div>

       <select ref={pmRef}>{parcelMachines
      .filter(element => element.A0_NAME === "EE")
     .map(element=>
     <option key={element.NAME}>{element.NAME}</option>)}
    </select>

   <button onClick={sendOrder}>Vormista tellimus</button>
   </div>}

   { cart.length === 0 &&  
    <div>
      <div>Ostukoris pole tooteid.</div>
      <div>Vajuta <Link to= "/tooted">siia</Link>, et jätkata ostlemist.</div>
      </div> }
   

    </div> );
}

export default  Cart ;
/* oskad kommunikeerida, rääkida arendajatega
 /* udemist trikke juurde vaadata
 /* kui cssi impordin, siis kehtib üle terve projekti
 /* .module on arendajatele justkui märksõna. iga faili sjaoks on üks css
 /* moodul. ilma mooduliteta on ta igas failis*/