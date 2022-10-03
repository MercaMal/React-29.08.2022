import { useState } from "react";
import {Link} from "react-router-dom"



function Avaleht () {
// vasak pool läheb HTMLi (teha muutuv koht)
    // paremal pool on funktsionaalsus, mille abil saan vasakut poolt muuta
         // kui toimub muutmine, siis antakse läbi parema poole sulgude uus väärtus
            // useState sulgude sees on esmane väärtus lehele tulles
              // pärast refreshi või lehelt (URL-lt) ära minnes ja tagasi tulles

// apiKey: "AIzaSyAj8149KX35XxpBt4M1DF1xvH8iUURDEAE",
//const -constant variable ehk konstantne muutuja
// let local variable in entire function. var on globaalne, seda ei kasutata

    const[kogus, uuendaKogus] = useState(6);
    const tooted =JSON.parse (localStorage.getItem("tooted")) || [];
  
    const nulli = () => { 
        // tegemist on funktsiooniga, mida saab lõputult käivitada
         // käivitub loogeliste sulgude vahel olev
            uuendaKogus(0);  
        }  
        // kui sulgude sisene on tõsi, siis tee seda
        // loogelistega ma tekitan mingi ploki (funktsiooni käimapanemine ja ifi plokk)
      const v2henda = () => {
        if (kogus > 0) {
            uuendaKogus (kogus-1);
        }
    } 
        
    const suurenda = () =>{
        uuendaKogus (kogus +1);
    } 

    const lisaOstukorvi = (klikitudToode)=>{
        let ostukorvLS =localStorage.getItem("ostukorv"); // see oleks sama || "[]"
        ostukorvLS=JSON.parse(ostukorvLS) || [];
        ostukorvLS.push(klikitudToode)
        ostukorvLS = JSON.stringify(ostukorvLS);
        localStorage.setItem("ostukorv", ostukorvLS);
}
     
    return ( 
        
    <div>
       {kogus > 0 && <button onClick={nulli}>Nulli tagasi</button> }
        <br />
        <br />
        <button onClick={v2henda}>-</button>
        <span>{kogus}</span> 
        <button onClick={suurenda}>+</button>
        {tooted.map((element, index)=> 
        <div key={element}>
        <Link to = {"/toode/" + index}>
        <div>{element.nimi}</div>
        </Link>
        <button onClick={()=>lisaOstukorvi(element)}>Lisa ostukorvi</button>
          
            </div> )}
      </div> )
}


export default Avaleht ;

// ref -inputi sees olemine
//use state komponendile restardi tegemine
// kui const on ees, sisse sellele ei anna rohkem võrdusmärgiga väärtust. 
//loogelisest sulusyt loogelise suluni on funktsiooi sisu

// span teeb teineteise kõrvale. paragrahv lükkas üksteise alla
// ERROR in [eslint]
// src\pages\Avaleht.js
// Line 2:33:  'useState' is not defined  no-undef- reacti erikood mis võimaldab htmli muuta
// useSatate on tundmatu(mitte defineeritud) ehk on jäänud importimata



// WARNING in [eslint]
// src\pages\Avaleht.js
// Line 4:11:  'kogus' is assigned a value but never used        no-unused-vars
// Line 4:18:  'uuendaKogus' is assigned a value but never used  no-unused-vars
// webpack compiled with 1 warning

// ma olen loonud sellise dünaamika võimaluse "kogus" aga ma ei ole  seda kordagi kasutusele võtnud (miks ma siis tegin selle?)

/*  // lehele tulles on mul 6 ees, kui vajutatakse -nupule, siis on algne 6 ees 6-1 on 5 ja see on nüüd uuenda kogus ja selle numbriga opereeritakse
            // rida nr 5:  funktsioon, mida saab lõputult käivitada, sinna loogeliste vahele läheb koodiplokk. 
                 // kui panen f käima (nupp käivitab), siis kogus võiks olla 5  */
/* kui kogus on suurem kui null, siis näitab
=== st et vasak ja parem pool võrdub omavahel
1 = ga antakse väärtusi
== seda ei olegi olemas */
   
