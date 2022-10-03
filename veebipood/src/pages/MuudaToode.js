import { useRef } from "react";
import { useParams } from "react-router-dom";

function MuudaToode() {
const { index } = useParams();
const tooted =JSON.parse (localStorage.getItem("tooted")) || [];
const leitudToode = tooted[index];

const nimiRef = useRef ();

const uuendaToode = () => {
    tooted [index] = nimiRef.current.value;
    localStorage.setItem("tooted", JSON.stringify(tooted));

}

    return ( 
    <div>
     <label>Toote nimi</label> <br />
     <input ref={nimiRef} type= "text" defaultValue={leitudToode} /> <br />
     <button onClick={uuendaToode}>Muuda toode</button>
    </div> );
}

export default MuudaToode;


// import {Link, Route, Routes, useParams} from react router dom- 
// navigeerimisega seotud
// import {useState, useRef} from react- HTML käsitlus
