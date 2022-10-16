import {useRef, useState} from "react"
function LisaTegelane() {
    const [sonum, uuendaSonum] = useState ("");
    

    const eesnimiRef = useRef ();
    const perenimiRef = useRef ();
    const vanusRef = useRef ();
    const elukohtRef = useRef ();


    const lisa = () => {
     if (eesnimiRef.current.value === "") {uuendaSonum ("Tühja nimega ei saa sisestada"); <br/>
    } else {uuendaSonum ("Tegelane lisatud"); 

 let tegelasedLS =localStorage.getItem("tegelane");
 tegelasedLS=JSON.parse(tegelasedLS) || [];
 
    const uusTegelane = {
    "eesnimi": eesnimiRef.current.value,
    "perenimi": perenimiRef.current.value,
    "vanus": vanusRef.current.value,
    "elukoht": elukohtRef.current.value
      }
      tegelasedLS.push(uusTegelane);
      tegelasedLS=JSON.stringify(tegelasedLS);
      localStorage.setItem("tegelased", tegelasedLS);
      
}
   
    }
    return ( <div>
        {sonum}
        <label>Tegelase eesnimi</label> <br />
        <input ref= {eesnimiRef} type= "text" /> <br />
        <label>Tegelase perenimi</label> <br />
        <input ref= {perenimiRef} type= "text" /> <br />
        <label>Tegelase vanus</label> <br />
        <input ref= {vanusRef} type ="text" /> <br />
        <label>Tegelase elukoht</label> <br />
        <input ref= {elukohtRef} type ="text" /> <br />

        <button onClick={lisa}>Lisa uus</button> <br />
    </div> );
}

export default LisaTegelane;