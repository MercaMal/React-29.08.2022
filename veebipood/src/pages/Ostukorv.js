import {useState} from "react"
function Ostukorv() {
    

    const [ostukorv, uuendaOstukorv] = useState (JSON.parse(localStorage.getItem("ostukorv")) || [] );

    const kustuta = (index) => {
     ostukorv.splice(index,1);
     uuendaOstukorv(ostukorv.slice());
     localStorage.setItem("ostukorv", JSON.stringify(ostukorv));


    }

    const tyhjenda = () => {
     uuendaOstukorv ([])
     localStorage.setItem("ostukorv",JSON.stringify([]));

 }


    return ( 
    <div>
        {ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} eset</div>}
        {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}
        {ostukorv.length > 0 &&<button onClick={tyhjenda}>Tühjenda</button>}

        {ostukorv.map((element, index)=>
         <div key ={index}> 
         <span>{element}</span>

          <button onClick={()=>kustuta(index)}>x</button>
         </div>)}

    </div> );
}




export default Ostukorv ;
// useState () annab esialgse väärtuse lehele tulles 
//[] alguses on väärtuseks ARRAY
//useState ([])
// saan mitu korda samat asja panna ostukorvi ("Fanta, "Fanta"
//  Kui key ei pane, siis error-anomaalia, kõk töötab, aga anomaalia on ka.)
// .map muudan iga elemendi, teisendan temast HTMLi
// div läheb vahele
// span- ei tehta uut rida, diviga lükkaks allapoole

// key-index-indexit ei ole, see tuleb tekitada
// 'index' is not defined  no-undef        
// Search for the keywords to learn more about each error.
// webpack compiled with 1 error
// saame teha nii, et iga ostukorvi key on tema järjekorranumber
// {ostukorv.map((element, index)= ja lisame elemendi järgi index numbri
// const kustuta = (j2rjekorranumber)=> {
// poed.splice(j2rjekorranumber,1);
// uuendaPoed(poed.slice());
// splice
// slice  ()(sulud tähistavad, et see funktsioon pannakse käima)
//uuendaOstukorv () sulgude sees panen uue väärtuse mida lehel näen