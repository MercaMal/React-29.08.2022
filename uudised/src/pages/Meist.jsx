import {useState} from "react";
function Meist () {
    const [kontakt, n2itaKontakt] =  useState("")
    const tootajad = [
        {
            "Nimi": "Merike Mõksi",
            "Ala": "Uudisklippide taustamuusika",
            "Telefon": "55650964"
        },
        {
            "Nimi": "Pille Minev",
            "Ala": "Püstolreporter",
            "Telefon": "5178975"
        },
        {
            "Nimi": "Hanna Martinson",
            "Ala": "Kujundus",
            "Telefon": "5049532"
        },
        {
            "Nimi": "Kerli Dello",
            "Ala": "Välisturgude spetsialist",
            "Telefon": "5550500"
        },
        {
            "Nimi": "Pille Minev",
            "Ala": "Püstolreporter",
            "Telefon": "5178975"
        },
        {
            "Nimi": "Hanna Martinson",
            "Ala": "Kujundus",
            "Telefon": "5049532"
        },
        {
            "Nimi": "Kerli Dello",
            "Ala": "Välisturgude spetsialist",
            "Telefon": "5550500"
        },

        
        
    ]
    return ( <div>

        <div>See on meist leht, nähtav localhost:3000/meist aadressil</div> 
        <div className="tekst">Meie töötajad</div>
        <br />

        {tootajad.map(tootaja=>
          <div>
           <div>{tootaja.Nimi}</div>
           <div>{tootaja.Ala}</div>
        
           <button onClick={() =>n2itaKontakt(tootaja.Telefon)}>Võta ühendust</button>
           </div> )} 
           <br/>
          { kontakt !==""&& <div>Tema kontakt: {kontakt}</div>} 
       


        {/* <div className="tekst">Merike Mõksi</div>
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
        <div>Välisturgude spetsialist</div> */}
       
       </div>
       );
}

export default Meist ;