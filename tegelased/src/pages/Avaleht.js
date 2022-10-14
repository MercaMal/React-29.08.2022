import { useState } from "react";


function Avaleht() { 
    
    const [tegelased, uuendaTegelased] = useState ([
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
    
    const [valitudTegelane, uuendaValitudTegelane] = useState ("");
    const kuvaNimi = (tegelane) => {
        console.log (tegelane);  
        uuendaValitudTegelane(tegelane);
       
       }
       const valiTegelane = (klikitudTegelane)=>{
        let tegelaneLS=localStorage.getItem ("valitudTegelased");
        tegelaneLS=JSON.parse(tegelaneLS) || [];
        tegelaneLS.push(klikitudTegelane)
        tegelaneLS = JSON.stringify(tegelaneLS);
        localStorage.setItem("valitudTegelane", tegelaneLS);
}
       
      

    
    return ( 
    // Nüüd võimalda näidata iga klikitud tegelase eesnime kliki abil HTML-s kirjega:
// „Klikkisid tegelase X peal“. Selleks kasuta useState funktsionaalsust, et panna X muutuma.
    <div>
       <div>Klikkisid tegelase: {valitudTegelane} peal</div> <br /> 
        {tegelased.map(tegelane=>

         <div>
           <div>{tegelane.eesnimi}</div>  
           <div>{tegelane.perenimi}</div>  
           <div>{tegelane.vanus}</div> 
           <div>{tegelane.elukoht}</div> 

           <button onClick={()=>kuvaNimi(tegelane.eesnimi)}>Vaata</button> <br/> 
           <button onClick={()=>valiTegelane(tegelane.eesnimi)}>Vali</button>
        </div> )}
        
   
   </div> );
    
    }


export default Avaleht;