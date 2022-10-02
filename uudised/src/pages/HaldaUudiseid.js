import {useState} from "react";
function HaldaUudiseid() {
    const [uudised, muudaUudised] = useState (JSON.parse(localStorage.getItem("uudised")) || []);
    const kustuta = (j2rjekorraNumber) => {
      uudised.splice(j2rjekorraNumber,1);  
      muudaUudised(uudised.slice());
      localStorage.setItem("uudised", JSON.stringify(uudised));

    }

    return ( 
    <div>
        {uudised.map((element,index)=>
        <div key={element}>
        <div>{element} <span />
        <button onClick={()=>kustuta(index)}>x</button>
        </div> 
        
        
      
    </div>) } 

  </div> );
}

export default HaldaUudiseid;