import {useState} from "react"
function Seaded() {
    const [kujundus, uuendaKujundus] =useState(localStorage.getItem("veebilehe_kujundus"));

    // const muudaKujundusDarkMode = () =>{
    //       uuendaKujundus("dark_mode");
    //       localStorage.setItem("veebilehe_kujundus", "dark_mode");
    // }

    // const muudaKujundusLightMode = () =>{
    //     uuendaKujundus("light_mode");
    //     localStorage.setItem("veebilehe_kujundus", "light_mode");
    // }
    // const muudaKujundusColoredMode = () =>{
    //     uuendaKujundus("colored_mode")
    //     localStorage.setItem("veebilehe_kujundus", "colored_mode");
    // }
     const muudaKujundus = (uusKujundus) => {
        uuendaKujundus (uusKujundus);
        localStorage.setItem("veebilehe_kujundus", "uusKujundus");

// teeme taaskasutamist, selle jaoks teeme viite
// const abil loon uue muutuja (viite)
// localStorage <---JavaScripti enda muutuja (viide)
     }

return ( 

<div>
  
    <button onClick={() => muudaKujundus("dark_mode")}>DarkMode</button>
    <button onClick={() => muudaKujundus("light_mode")}>LightMode</button>
    <button onClick={() => muudaKujundus("colored_mode")}>CloredMode</button>
{/* läheb lõputult muutuma */}
    {/* loogeliste sees on dünaamika, mida teeb javas
    // && kas näitan paremat poolt või mitte, 
    vastavalt kas sellest vasak pool on tõene*/}

    {kujundus === "dark_mode" && <div> TUME LEHT</div>}
    {kujundus === "light_mode" && <div> HELE LEHT</div>}
    {kujundus === "colored_mode" && <div> VÄRVILINE LEHT</div>}
   

</div> );
}

export default Seaded;