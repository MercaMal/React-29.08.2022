import { useState } from "react";
import tootedFromFile from "../data/tooted.json";
import Pagination from "react-bootstrap/Pagination";



function Tooted () {
   
  const [tooted, uuendaTooted] = useState (tootedFromFile);  

  const [activePage, setActivePage]= useState(2);
  let pages = [1,2,3,4,5];

  const sortAZ = ()=> {
    tooted.sort((a,b)=>a.name.localeCompare(b.name)); //.sort sulud siin enam ei toimi
    uuendaTooted(tooted.slice()); // meil on tegemist objektidega, tavaline sort ei toimi.

}
const sortZA = ()=> {
  tooted.sort((a,b)=>b.name.localeCompare(a.name)); //.sort sulud siin enam ei toimi
  uuendaTooted(tooted.slice()); // meil on tegemist objektidega, tavaline sort ei toimi.

}
    return ( 
  
    <div>
      <Pagination>
        {pages.map(number=> 
        <Pagination.Item key = {number} active ={number === activePage}>
        {number}
        </Pagination.Item>)}
      </Pagination>

      <button onClick={sortAZ}>Sorteeri A-Z</button>
      <button onClick={sortZA}>Sorteeri Z-A</button>


        {tooted.map(element=>
        <div key={element.id}>
           <img src={element.image} alt=""/>
           <div>{element.name}</div>
           <div>{element.price}</div>
          
          </div>
        )}




    </div> );
}

export default Tooted
;