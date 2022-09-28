import { useState } from "react";

function Meist() {
 const [message, määraMessage] = useState("Vali mõni tegevus");
 const määraMessageKandideeriTööle =()=> {
    määraMessage ("Selleks saada meile e-mail jobs@html-css.com");
 }
 const määraMessageVaataMeieTöötajaid =()=> {
     määraMessage ("Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal");
 }
 const määraMessageVõtaMeiegaÜhendust = ()=> {
    määraMessage ("Ühenduse võtmiseks mine lehele Kontakt")


 }
    return (                  
        <div>
            <div>{message}</div>
            <button onClick={määraMessageKandideeriTööle}>Kandideeri tööle</button>
            <button onClick={määraMessageVaataMeieTöötajaid}>Vaata meie töötajaid</button>
            <button onClick={määraMessageVõtaMeiegaÜhendust}>Võta meiega ühendust</button>
        </div> );
}

export default Meist;                                         