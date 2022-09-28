import {useState} from "react";



function Sõnad() {
const [sõnad, uuendaSõnad]= useState (['shoes', 'shirts', 'socks', 'sweaters','pigs', 'goats', 'sheep', 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'March', 'Jan', 'Feb', 'Dec']);

// Võimalda neid kustutada – tee selleks igaühele nupp (salvestus ei toimi, refreshiga tuleb tagasi).
const kustuta = (j2rjekorranumber)=> {
    sõnad.splice(j2rjekorranumber,1);
    uuendaSõnad(sõnad.slice());
}

// Võimalda neid tühjendada – tee selleks ÜKS nupp (salvestus ei toimi, refreshiga tulevad tagasi).
const tyhjenda = ()=>{
    uuendaSõnad([]);
}

// Võimalda neid tähestiku järgi sorteerida – tee selleks ÜKS nupp (salvestus ei toimi, refreshiga läheb originaaljärjestusse).
const sorteeri = ()=>{
    sõnad.sort() 
    uuendaSõnad(sõnad.slice());
}

// Võimalda alles jätta kõik kellel on rohkem kui 4 tähte – tee selleks ÜKS nupp (salvestus ei toimi, refreshiga tulevad tagasi).
const filtreeri =()=>{
    const vastus=sõnad.filter(sõnad=>sõnad.length >4);
    uuendaSõnad(vastus)
}

// Võimalda nupuga juurde lisada korraga 3 uut asja: 'chickens', 'cats', 'dogs' – tee selleks ÜKS nupp (salvestus ei toimi, refreshiga kaovad ära).
const lisaSonad=()=>{
    sõnad.push('chickens', 'cats', 'dogs')
    uuendaSõnad(sõnad.slice())
}

    

    return (
    <div> 
        
{/* Kuva mitu tükki neid on kõige üleval (.length abil) */}
    <div>Sõnu on: {sõnad.length} tk</div>  
    
     <button onClick={tyhjenda}>Tühjenda</button>
     <button onClick={sorteeri}>Sorteeri A-Z</button>
     <button onClick={filtreeri}>Nimi pikem kui 4 tähte</button>
     <button onClick={lisaSonad}>Chickens, cats, dogs</button>

     {sõnad.map(element=><div key={element}>{element}<button onClick={kustuta}>Kustuta</button></div>)} 
     {/* key error, mis teeb teda unikaalseks, react tahab teada (hunnik asju, div`e, mis on selle divi puhul unikaalne, ) */}
     {/*  */}



</div>);
}

export default Sõnad;