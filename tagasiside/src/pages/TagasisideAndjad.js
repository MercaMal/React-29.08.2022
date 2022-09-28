import { useState } from "react";
import andjateFail from "../nimed.json"


function TagasisideAndjad() {
const [andjad, uuendaAndjad] = useState (andjateFail);
const [paul, uuendaPaul] = useState ();
const [firstD, uuendaFirstD] = useState ();

// filtreeriM
const filtreeriM=()=>{
  const vastus=andjad.filter(andjad=>andjad.startsWith ("M"));  
  uuendaAndjad(vastus);
}
const filtreeri6 =()=>{
  const vastus= andjad.filter(andjad=>andjad.length === (6));
  uuendaAndjad(vastus);
}

// jäta alles y-ga lõppevad nimed
const filtreeriY =()=>{
  const vastus=andjad.filter(andjad=>andjad.endsWith ("y"));
  uuendaAndjad(vastus);    
}

// sorteeri Z-A. enne sortida ja siis reverse. andjad.reverse()
const sorteeri = ()=>{
  andjad.sort().reverse();    
  uuendaAndjad(andjad.slice());
}

//  iga nime ette EST
const insertEST = ()=>{
  const vastus=andjad.map(andjad=>"EST-"+andjad);
  uuendaAndjad(vastus);    
}


//  mis on Pauli järjekorranumber
const findPaulIndex = ()=>{
  const index = andjad.indexOf ("Paul");
  console.log (index);
  uuendaPaul(index);


}


//  kuva esimene kellel, on D tähega algav nimi
const leiaEsimeneDTahega =()=> {
const vastus=andjad.find(element=>element.startsWith("D"));
uuendaFirstD(vastus);
console.log(vastus);
}




 



return (

    <div>
        <div>Pauli järjekorranumber on {paul}</div>
        <div>Esimene D tähega on {firstD}</div>
        <div>Tagasisideandjaid on {andjad.length} tk </div>
        <button onClick={filtreeriM}>M-tähega tagasiside andjad</button>
        <button onClick={filtreeri6}>6-kohalised nimed</button>
        <button onClick={filtreeriY}>Y-ga lõppevad nimed</button>
        <button onClick={sorteeri}>Sorteeri Z-A</button>
        <button onClick={insertEST}>Lisa EST</button>
        <button onClick={findPaulIndex}>Mis on Pauli järjekorranumber</button>
        <button onClick={leiaEsimeneDTahega}>Esimene D tähega</button>
       
{andjad.map(element=> <div>{element}</div>)}
      







    </div> );
}

export default TagasisideAndjad;