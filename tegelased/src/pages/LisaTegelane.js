import {useRef, useState} from "react"
function LisaTegelane() {
    const [sonum, uuendaSonum] = useState ("");
    const tegelased = JSON.parse (localStorage.getItem("tegelased"))|| []

    const nimiRef = useRef ();
    const vanusRef = useRef ();
    const elukohtRef = useRef ();


    const lisa = () => {
     if (nimiRef.current.value === "") {uuendaSonum ("Tühja nimega ei saa sisestada");
    } else {uuendaSonum ("Tegelane lisatud");

    let valitudTegelaneLS = localStorage.getItem ("valitudTegelane");
    valitudTegelaneLS = JSON.parse(valitudTegelaneLS) || []
    valitudTegelaneLS.push
    
    localStorage.setItem("tegelane", tegelaneLS);

    console.log(nimiRef.current.value)
    console.log(vanusRef.current.value)
    console.log(elukohtRef.current.value)
    
    const uusTegelane = {
    "nimi": nimiRef.current.value,
    "vanus": vanusRef.current.value,
    "elukoht": elukohtRef.current.value
      }
      
}
   
    }
    return ( <div>
        {sonum}
        <label>Tegelase nimi</label> <br />
        <input ref= {nimiRef} type= "text" /> <br />
        <label>Tegelase vanus</label> <br />
        <input ref= {vanusRef} type ="text" /> <br />
        <label>Tegelase elukoht</label> <br />
        <input ref= {elukohtRef} type ="text" /> <br />

        <button onClick={lisa}>Lisa uus</button> <br />
    </div> );
}

export default LisaTegelane;