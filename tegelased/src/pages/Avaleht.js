import { useState } from "react";


function Avaleht() { 
   
    const [tegelased, uuendaTegelased] = useState (JSON.parse (localStorage.getItem("tegelased")) || [
    {
        "eesnimi": "Mickey",
        "perenimi": "Mouse",
        "vanus": "20",
        "elukoht": "Disneyland"
    },
    {
        "eesnimi": "Minnie",
        "perenimi": "Mouse",
        "vanus": "19",
        "elukoht": "Disneyland"
    },
    {
        "eesnimi": "Winnie",
        "perenimi": "Pooh",
        "vanus": "40",
        "elukoht": "Hundred Arce Wood"
    },
    {
        "eesnimi": "Roo",
        "perenimi": "Kangaroo",
        "vanus": "35",
        "elukoht": "Hundred Arce Wood"
    },
    {
        "eesnimi": "Scooby",
        "perenimi": "Doo",
        "vanus": "55",
        "elukoht": "Crystal Cove"
    }
    ])
    
    const [klikitudNimi, uuendaKlikitudNimi] = useState ("");
    
    const kuvaNimi = (tegelane) => {
        //console.log (tegelane.eesnimi);  
        uuendaKlikitudNimi(tegelane.eesnimi);
       
       }
       const valiTegelane = (klikitudTegelane)=>{
        let valitudLS=localStorage.getItem ("valitudTegelased");
        valitudLS=JSON.parse(valitudLS) || [];
        valitudLS.push(klikitudTegelane)
        valitudLS = JSON.stringify(valitudLS);
        localStorage.setItem("valitudTegelased", valitudLS);
        }
       
      
    return ( 
    // Nüüd võimalda näidata iga klikitud tegelase eesnime kliki abil HTML-s kirjega:
// „Klikkisid tegelase X peal“. Selleks kasuta useState funktsionaalsust, et panna X muutuma.
    <div>
       { klikitudNimi !== "" && <div>Klikkisid tegelase: {klikitudNimi} peal</div> } <br />
        {tegelased.map(tegelane=>

         <div>
           <div>{tegelane.eesnimi}</div>  
           <div>{tegelane.perenimi}</div>  
           <div>{tegelane.vanus}</div> 
           <div>{tegelane.elukoht}</div> 

           <button onClick={()=>kuvaNimi(tegelane)}>Kuva nimi</button> <br/> 
           <button onClick={()=>valiTegelane(tegelane)}>Vali</button>
        </div> )}
        
   
   </div> );
    
    }


export default Avaleht;