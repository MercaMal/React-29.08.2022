import { useRef } from "react";
import { useParams } from "react-router-dom";

function MuudaToode() {
const { index } = useParams();
const tooted =JSON.parse (localStorage.getItem("tooted")) || [];
const leitudToode = tooted[index];

const nimiRef = useRef ();
const hindRef = useRef ();
const piltRef = useRef ();



const uuendaToode = () => {
tooted[index] = {
"nimi": nimiRef.current.value,
"hind": Number (hindRef.current.value),
        "pilt": hindRef.current.value
    };
    localStorage.setItem("tooted", JSON.stringify(tooted));

}

    return ( 
    <div>
     <label>Toote nimi</label> <br />
     <input ref={nimiRef} type= "text" defaultValue={leitudToode.nimi} /> <br />
     <label>Toote hind</label> <br />
     <input ref={hindRef} type= "number" defaultValue={leitudToode.hind} /> <br />
     <label>Toote pilt</label> <br />
     <input ref={piltRef} type= "text" defaultValue={leitudToode.pilt} /> <br />
     
     <button onClick={uuendaToode}>Muuda toode</button>
    </div> );
}

export default MuudaToode;


// import {Link, Route, Routes, useParams} from react router dom- 
// navigeerimisega seotud
// import {useState, useRef} from react- HTML käsitlus
