import {useState} from "react"
function Kontakt() {
        const [aadress, määraAadress] =useState("Tallinn");
        const [telefon, määraTelefon] =useState("5512345");
        const [email, määraEmail] =useState("bla@baa.com");
        const [ingliseKeelne, määraIngliseKeelne]= useState("ei");

        const ingliseks = () => {
              määraAadress("London"); 
              määraEmail ("london@london.com");
              määraTelefon ("12312412");
              määraIngliseKeelne ("jah");
            
        }
              

    return ( 
        <div>
            <div>{aadress}</div>
            <div>{telefon}</div>
            <div>{email}</div>
            <button onClick={ingliseks}>Muuda inglise keelseks</button>
            {ingliseKeelne ==="jah" && <div>Leht on inglise keelne</div>}
            
            {/* const- abil loon uue muutuja */}
            {/* JS  -HTML-s loogeliste sulgude vahel */}
            {/*  */}
        </div> );
}

export default Kontakt;