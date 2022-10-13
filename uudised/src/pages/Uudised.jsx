import {Link} from "react-router-dom"
function Uudised () {
const uudised=JSON.parse(localStorage.getItem("uudised")) || [];


    return ( <div>
    <div>See on uudiste leht, nähtav localhost:3000/uudised aadressil</div> 
    {uudised.length === 0 && <div> Hetkel ühtegi uudist ei ole. Lisame õige pea.</div>} UUDISE NIMI: 
    
    
        <div>{uudised.map((uudis, index)=> 
        <Link to = {"/uudis/"+index}>
        <div>{uudis}</div>
        </Link>
       )}</div>
       </div> );


   
}

export default Uudised ;