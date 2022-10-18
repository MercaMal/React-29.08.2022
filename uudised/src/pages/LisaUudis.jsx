import { useRef } from "react";

function LisaUudis() {

const uudiseRef=useRef ();

const lisaUusUudis = ()=>{
let uudised = localStorage.getItem("uudised"); // let muutuja-et saaks ka hilisemalt väärtust anda
uudised = JSON.parse(uudised)|| []; //jutumärgid maas
uudised.push(uudiseRef.current.value);
uudised = JSON.stringify(uudised); // jutumärgid peale
localStorage.setItem("uudised", uudised);

}


return ( 
    <div>
     <label>Uudise nimi</label> <br />
     <input ref={uudiseRef} type="text" /> <br />
     <button onClick={()=>lisaUusUudis()}>Lisa uudis</button>


    </div> );
}

export default LisaUudis;

// let-saan alati muuta.
// const ära seda muuda-constant