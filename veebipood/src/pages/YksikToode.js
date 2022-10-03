import { useParams } from "react-router-dom";

function YksikToode() {
 const {j2rjekorraNumber} = useParams ()
 const tootedLS = JSON.parse(localStorage.getItem("tooted"))|| [];
 const n2idatavToode = tootedLS[j2rjekorraNumber];
 console.log(n2idatavToode);


    return (
    <div>
    <div>{j2rjekorraNumber}</div>
    { n2idatavToode !== undefined && <div>{n2idatavToode}</div>}
    { n2idatavToode  === undefined && <div>Valitud toodet ei leitud</div>}
    </div> );

}

export default YksikToode;