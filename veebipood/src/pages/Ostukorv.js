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
const arvutaOstukorviKogusumma = () => {
 let kogusumma = 0;
 ostukorv.forEach(element => kogusumma  = kogusumma+ element.hind);
 return kogusumma.toFixed(2);
 }
 

const pay = () => {

    const data = {
        "api_username": "92ddcfab96e34a5f",
        "account_name": "EUR3D1",
        "amount":arvutaOstukorviKogusumma(),
        "order_reference": Math.random() * 99999,
        "token_agreement": "unscheduled",
        "nonce": "a9b7f7e792"+ Math.random() * 99999+ new Date (),
        "timestamp": new Date (),
        "email": "user@example.com",
        "customer_url": "https://merca-react-project"
        }
       fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff",{
        "method": "POST",
         "body": JSON.stringify(data),
         "headers":{
            "Content-Type": "application/json",
            "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
         }
        }) .then(res=> res.json())
        .then(json =>window.location.href=json.payment_link);

}
    return ( 
    <div>
        {ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} eset</div>}
        {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}
        {ostukorv.length > 0 &&<button onClick={tyhjenda}>Tühjenda</button>}

        {ostukorv.map((element, index)=>
         <div key ={index}> 
         
         <span>{element.nimi}</span>
         <img src={element.pilt} alt="" />
        <div>{element.hind} £ </div>

        <button onClick={()=>kustuta(index)}>x</button>
         </div>)}
         <div>{arvutaOstukorviKogusumma()}£</div>
            <button onClick = {pay}>Vormista tellimus</button>

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