import {useState} from "react"

function ValitudTegelased() {
 const [valitudTegelased, uuendaValitudTegelased] = useState (
  JSON.parse(localStorage.getItem("valitudTegelased")) || []);

  const eemalda = (index) => {
  valitudTegelased.splice(index,1);
  uuendaValitudTegelased(valitudTegelased.slice());
  localStorage.setItem("valitudTegelased", JSON.stringify(valitudTegelased));

  }
  const kustuta = ()=> {
    uuendaValitudTegelased ([]);
    localStorage.setItem("valitudTegelased", JSON.stringify([]))
  }


    return ( 
    
    <div>
     {valitudTegelased.length > 0 && <div>Valitud on {valitudTegelased.length} tegelast</div> }  
    {valitudTegelased.lengtt> 0 && <button onClick ={kustuta}>Kustuta kõik</button>}
     {valitudTegelased.map((tegelane,index) =>
      <div>
      <div>{tegelane.eesnimi}</div>  
      <div>{tegelane.perenimi}</div>  
      <div>{tegelane.vanus}</div> 
      <div>{tegelane.elukoht}</div> 
      <button onClick ={()=> eemalda(index)}>Eemalda</button>
      
      </div> )}
     

    </div> );
}

export default ValitudTegelased;