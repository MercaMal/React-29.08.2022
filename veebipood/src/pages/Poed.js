import {useState} from "react";
import {useRef} from "react";
import poedFailist from "../poed.json";


function Poed() {
const [poed, uuendaPoed] = useState (poedFailist);
const poodRef= useRef ()
const indexRef = useRef();
const uusRef = useRef();

const sorteeri =()=> {
    poed.sort();
    uuendaPoed(poed.slice());
}

const kustuta = (j2rjekorranumber)=> {
    poed.splice(j2rjekorranumber,1);
    uuendaPoed(poed.slice());
}
const lisaPood =()=>{
    poed.push(poodRef.current.value);
    uuendaPoed(poed.slice());
}
const tyhjenda = () => {
    uuendaPoed([]);
  }
const filtreeri = () => {
    const vastus = poed.filter(pood => pood.includes("mäe"));
    uuendaPoed(vastus);
  }

const muudaK6iki = () => {
  const vastus = poed.map(pood => pood.charAt(0) + pood);
  uuendaPoed(vastus);
  }

const muudaPood = () => {
 poed[indexRef.current.value] = uusRef.current.value;
 uuendaPoed(poed.slice());
}
 const [valitudPood, uuendaValitudPood] = useState("");
 const vaata = (pood) => {
    console.log(pood); 
    uuendaValitudPood(pood);
}
return (
    <div>
      <button onClick={sorteeri}>Sorteeri A-Z</button>
      <button onClick={tyhjenda}>Tühjenda</button> 
      <button onClick={filtreeri}>Jäta vaid "mäe"-d sisaldavad alles</button>
      <button onClick={muudaK6iki}>Muuda kõiki</button>
      <br />

      <label>Uus pood</label> <br />
      <input ref={poodRef} type="text" /> <br />
      <button onClick={lisaPood}>Lisa uus pood</button> <br />
      <div>Sinu valitud pood: {valitudPood}</div>
      <div>Poode on {poed.length} tk</div>

      {poed.map((pood,index) => 
        <div key={pood}>{pood} 
        {/* kuidas saab efektiivselt kustutada, muuta. 
        ja kui on kaks samasugust, siis läheb errorisse */}
          <button onClick={() => kustuta(index)}>x</button>
          <button onClick={() => vaata(pood)}>Vaata</button>
        </div>)} 

      <label>Järjekorranumber</label> <label>Uus väärtus</label> <br />
      <input ref={indexRef} type="text" /> <input ref={uusRef} type="text" /> <br />
      <button onClick={muudaPood}>Muuda pood</button> <br />

    
    </div>
);
}
export default Poed;
// muutuja, mille väärtuseks on array(väärtuste kogumik) iga 1 element on eristatud komaga //         0             1         2            3            4    
//poed.push(tagasisideRef.current.value);
// key, mis teeb ta unikaalseks. kui key ei pane, siis warning console logis.kehtib ainult .map sees esimese divi sees. POE NIMI 
// ON unikaale. järelikult kaks samasugust ei saa olle (kaks kristiinet nt, siis oleks ka error)
// splice, mitmendat ja mitu tükki pean mainima
// const kustuta= (index)=> {} index v j2rjekorranumber, pole vahet, kuidas sisestad
//const kustuta = (j2rjekorranumber)=> {}
//  .map() on array-de kuvamiseks HTMLs, siis teen selle funktsionaalsuse, mis on sisus tsükkel.
// tehakse noole paremat poolt nii mitu korda kui mitu komaga eristatud elementi mul on
//poed.sort- JavaScripti sissekirjutatud funktsionaalsus-->sorteeri A-Z

//poed.map is not a function- et .map ees ei ole [] väärtust

// JSX- tähistab javascripti ja HTMLi
// poed.push
// key tuleb panna .mapi puhul enamuse juhul esimene div, see teeb selle unikaalseks.

//  tumesinine HTMLis on tag div, button img, JA-s definitsioonid:function, const =>
//  {/* kollane on funkstioon  ja tal on sulud enamus juhtude lõpus (teen ühe array pihta funktsiooni)*/}
// tavaline sinine on meie tehtud const muutuja
// helesinine on HTML-s on tag-i atribuut, className="", alt="", src=", JS-s muutujad, kus pole const ees
// punane/oranž - sõnaline väärtus
// valge HTML-s väljakuvamine

// []-kandilised sulud- array jaoks, useState loomise jaoks
// {}- koodiblokk JS-s, HTML-s JS-ga tegemist
// ()- funktsiooni sulud
// ()=> {} - funktsiooni loomine
// && - kui vasakul pool on tõsi, siis näita paremat
// || - kui vasakul pool on tühjus, siis võta parem
// === - vasak pool võrdub parema poolega
//  ; - rea lõpetamiseks (pole kohustuslik)
//  , - array sees elementide eristamiseks
//  . - kutsun selle muutuja funktsionaalsuse välja
//  = - annan muutujale väärtust

// {/* array- massiivid-listid */}
//  {/* ["Mustamäe", "Kristiine", "Lasnamäe", "Põhja-Tallinn"] */}
//  {/* iga uue toote kohta ei tehta uut useState`i */}
// {/* saan filtreerida, tähestikujärjekorda panna, otsingud */}
// {/* poed üldiselt kasutavad arraysid */}
//  {/* [] sulud defineerivad arrayd */}

// {/* .map on ka sissekirjutatud funktsionaalsus */}
// {/* .map on tsükkel */}
//  {/* kollane on funkstioon */}
// {/* sinine on muutuja */}
// {/*.map on arrayde kuvamiseks HTML-s, siis teen selle funktsionaalsuse */ 
        // mis on sisus tsükkel. tehakse noole paremat poolt nii mitu korda, kui mitu komaga eristatud elementi mul on
        // .map is not function, st et map ees ei ole [] väärtust
        // poed.sort on JS-i sissekirjutatud funktrionaalsus->sorteeri A-zni
        // (poed.slice()); mäluosa väljalõikamine, tekitab koopia. Slice on ka funktsioon
        // ei lähe loopi.