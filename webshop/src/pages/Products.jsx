import productsFromFile from "../data/products.json";
import Button from "react-bootstrap/Button";
import { useState } from "react";


function Products() {
    const [amount, setAmount] = useState ();
    const productsFromFile = JSON.parse(localStorage.getItem("products")) || [];
    
    const addToCart = (clickedItem)=>{
        let cartLS=localStorage.getItem("cart");
        cartLS=JSON.parse(cartLS) || [];
        cartLS.push (clickedItem);
        cartLS=JSON.stringify(cartLS);
        localStorage.setItem("cart", cartLS);
    }


    return ( 
    <div>
       
        {productsFromFile.map(element=>
        <div>
           <img src={element.image} alt=""/>
           <div>{element.name}</div>
           <div>{element.price}</div>
           <Button button onClick={()=>addToCart(element)} variant="success">Lisa ostukorvi</Button>
          </div>
        )}
    </div> );
}

export default Products;