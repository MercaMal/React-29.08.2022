import {useRef, useState} from "react"
function LisaTegelane() {
    const [sonum, uuendaSonum] = useState ("");
    const nimiRef = useRef ();

    const lisa = () => {
     if (nimiRef.current.value === "") {uuendaSonum ("Tühja nimega ei saa sisestada");
    } else {uuendaSonum ("Tegelane lisatud");
}

    }

    return ( <div>
        {sonum}
        <label>Tegelase nimi</label> <br />
        <input ref= {nimiRef} type= "text" /> <br />
        <button onClick={lisa}>Lisa uus</button> <br />
    </div> );
}

export default LisaTegelane;