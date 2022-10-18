import { useState } from "react";
import kasutajadFile from "../data/kasutajad.json";

function Kasutajad() {
 const [kasutajad, uuendaKasutajad] = useState(kasutajadFile);
 
 const allBack = ()=> {
   uuendaKasutajad(kasutajadFile)
 }

const filterName =()=>{
const result = kasutajad.filter(user => user.username.length >= 10);
uuendaKasutajad(result);
}

const findIndexAndDelete = (kasutaja) => {
   const index = kasutajad.indexOf(kasutaja); 
   kasutajad.splice(index,1); 
   uuendaKasutajad(kasutajad.slice());  
}
 const findIndexLucino = () => {
   const index =kasutajad.findIndex(user => user.email==="Lucino_Hettinger@annie.ca");
   console.log(index);
}

 const findFirstNameC = () => {
   const found = kasutajad.find(user => user.name.substring(0,1)=== "C");
   console.log(found)
}

 const sortByLatitude = () => {
    kasutajad.sort((a,b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
    uuendaKasutajad(kasutajad.slice());
 }
  const filterByLongitude= () => {
   const result = kasutajad.filter(user => user.address.geo.lng > 0);
   uuendaKasutajad(result);
} 
const sumIds = () =>{
   let sum = 0
   kasutajad.forEach(kasutaja => sum = sum+ kasutaja.id);
   console.log(sum);
}
 const addToPhoneNumber = () => {
 const result = kasutajad.map(user=> ({...user, phone: "000" +user.phone}));
 uuendaKasutajad(result);

 }
 const replaceAllWithEmail = () => {
   const result = kasutajad.map(user => user.email);
   console.log(result);
 }

 const replaceCatchphraseLetter = () => {
   const result = kasutajad.map(user=> ({...user, company: {...user.company, catchPhrase: user.company.catchPhrase.replaceAll("a", "e")}}))
   uuendaKasutajad(result);
 }

    return ( 
     <div className= "kasutajad-text">
     <div>{kasutajad.length}</div>
     <button onClick={()=>allBack()}>Kasutajad tagasi</button> 
     <button onClick={()=>filterName ()}>Kasutajanimi suurem 10 tähte</button>
     <button onClick={()=>findIndexAndDelete(kasutajad)}>Järjekorranumber ja kustuta</button>
     <button onClick={()=>findIndexLucino()}>Lucino</button>
     <button onClick={()=>findFirstNameC()}>C</button>
     <button onClick={()=>sortByLatitude()}>Sorteeri lat väärtuse järgi</button>
     <button onClick={()=>filterByLongitude()}>Ing</button>
     <button onClick={()=>sumIds()}>ID summa</button>
     <button onClick={()=>addToPhoneNumber()}>Lisa 000</button>
     <button onClick={()=>replaceAllWithEmail()}>Email</button>
     <button onClick={()=>replaceCatchphraseLetter()}>Email</button>





     {kasutajad.map(kasutaja=>
      <div>
      <div>{kasutaja.id}</div> 
      <div>{kasutaja.name}</div> 
      <div>{kasutaja.username}</div> 
      <div>{kasutaja.email}</div> 
      <div>{kasutaja.address.street}</div> 
      <div>{kasutaja.address.suite}</div> 
      <div>{kasutaja.address.city}</div> 
      <div>{kasutaja.address.zipcode}</div> 
      <div>{kasutaja.address.geo.lat}</div> 
      <div>{kasutaja.address.geo.Ing}</div> 
      <div>{kasutaja.phone}</div> 
      <div>{kasutaja.website}</div> 
      <div>{kasutaja.company.name}</div> 
      <div>{kasutaja.company.catchPhrase}</div> 
      <div>{kasutaja.bs}</div> 
     </div>
     )}


     </div>);
}

export default Kasutajad
;