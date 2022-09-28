function Uudised () {
const uudised=JSON.parse(localStorage.getItem("uudised")) || [];


    return ( <div>
    <div>See on uudiste leht, nähtav localhost:3000/uudised aadressil</div> 
    {uudised.length === 0 && <div> Hetkel ühtegi uudist ei ole. Lisame õige pea.</div>} UUDISE NIMI: 
    
    
        {uudised.map(uudis=> <div key= {uudis}>{uudis}</div>)}

    </div>
    );
}

export default Uudised ;