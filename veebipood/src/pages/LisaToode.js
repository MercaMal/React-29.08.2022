import {useRef, useState} from "react"


function LisaToode() {
    const [s6num, uuendaS6num] = useState ("Lisa uus toode!");
    const nimiRef = useRef ();
    const hindRef = useRef ();
    const piltRef = useRef ();
    
    
    
    const lisa = () => {
        if (nimiRef.current.value ==="") {uuendaS6num("Nime sisestusväli ei saa olla tühi!");
        // kui sulgude sees on tõsi siis mine siia plokki vastasel juhul teise plokki
       }else {uuendaS6num("Toode lisatud");

      let tootedLS= localStorage.getItem("tooted");
      tootedLS=JSON.parse(tootedLS) || [];
      const uusToode = {
        "nimi": nimiRef.current.value,
        "hind": Number(hindRef.current.value),
        "pilt": piltRef.current.value
      }
      tootedLS.push(uusToode);
      tootedLS=JSON.stringify(tootedLS);
      localStorage.setItem("tooted", tootedLS);
      
    }
    
    }
    return ( 
        <div>
          <div>{s6num}</div>
          <label>Uue toote nimi</label> <br />
          <input ref={nimiRef} type="text" /> <br />
          <label>Hind </label> <br />
          <input ref={hindRef} type="number" /> <br />
          <label>Pilt</label> <br />
          <input ref={piltRef} type="text" /> <br />
          
          <button onClick={lisa}>Sisesta</button> <br />
        </div> );
    }

// https://tableconvert.com/excel-to-json
// LET/CONST
    //Uncaught TypeError: invalid assignment to const 'tootedLS'- const-ei tohiks talle teist korda kuskil väärtust anda. 
    // läbi uuenduse saab anda väärtuse. constante väärtus. siis tuleb const asemel panna LET

    //Uncaught TypeError: tootedLS is null
    //push tühjusele pushida. Võtame LSst-aga seal on tühjus null ||

// 1. võta kõik vanad väärtused LS-st (local storagest) localStorage.getItem("VÕTI")
// 2. võtame LS-st saadud väärtusest jutumärgid maha ---->Json.parse()
// 3. lisa üks juurde push (üksJuurde);
// 4. paneme uuele arrayle jutumärgid peale---> Json.stringify
// 5. pane tagasi LS-sse localStorage.setItem("VÕTI", uusVäärtus)

//mul on set ja get

    // br -et asjad ei oleks vasakult paremale, vaid üksteise all. br lisab uue rea
//  const ja function on sama
//  suurtes projektis tuleb teha nagu juba on tehtud
//local storage- võtab selle, mis viimati võeti. kui olen 5 olen sisestanud, tahan et need jääks ka alles, mis juba on ostukorvis




export default LisaToode;