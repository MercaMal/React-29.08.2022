import {useState} from "react"
function Meist () {
    const [kontakt, n2itaKontakt] =  useState("")
    return ( <div>
        <div>See on meist leht, nähtav localhost:3000/meist aadressil</div> 
        <div className="tekst">Meie töötajad</div>
        <br />
        <div className="tekst">Merike Mõksi</div>
        <div>Uudisteklippide taustamuusika</div>
        <button onClick={()=> n2itaKontakt (5178675)}>Võta ühendust</button>
        <br /> <br />
        <div>Pille Minev</div>
        <div>Püstolreporter</div>
        <button onClick={() =>n2itaKontakt (5178698)}>Võta ühendust</button>
        <br /> <br />
        <div>Hanna Martinson</div>
        <div>Uudiste kujundamine</div>
        <button onClick={() =>n2itaKontakt(55650964)}>Võta ühendust</button>
        <br /> <br />
        <div>Kerli Dello</div>
        <div>Välisturgude spetsialist</div>
        <button onClick={() =>n2itaKontakt(5049532)}>Võta ühendust</button>
        <br /> <br />
         { kontakt !==""&& <div>Tema kontakt: {kontakt}</div>}

    </div> );
}

export default Meist ;