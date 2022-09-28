import {Link, Route, Routes} from "react-router-dom";
import Seaded from './pages/Seaded';
import Avaleht from "./pages/Avaleht";
import Kontakt from "./pages/Kontakt";
import Meist from "./pages/Meist";
import Sõnad from "./pages/Sõnad";

import './App.css';
import { useRef, useState } from "react";

function App() {
const [sisselogitud, muudaSisselogitud] = useState("ei");
const [sonum, muudaSonum]= useState ("");
const kasutajaNimiRef = useRef ();
const paroolRef = useRef ();

const logiSisse = () =>{
  if (paroolRef.current.value === "123") {
  muudaSisselogitud ("jah");
  muudaSonum (kasutajaNimiRef);
  muudaSonum ("Merilin, oled sisse logitud");
} else{
  muudaSonum ("Vale parool")
}

}
 return (
 
 <div className="App">
      <div>{sonum}</div>
      {sisselogitud === "ei" && <div>
      <label>Kasutajanimi</label> <br />
      <input ref={kasutajaNimiRef} type="text" /> <br />
      <label>Parool</label> <br />
      <input ref={paroolRef} type="password" /> <br />
      </div>}

      {sisselogitud === "ei" &&<button onClick={logiSisse}>Logi sisse</button> }
      {sisselogitud === "jah" &&<button onClick={()=>muudaSisselogitud("ei")}>Logi välja</button> }
      

  <div>
    <button className="nupp">Klikka siia!</button>
    <div> className="tekst"> <br/> Esimene kodune ülesanne. Tee sinine tekst, millele hiirega peale minnes muuda selle teksti suurus suuremaks font-size: 24px  hover.
    Pane sinine tekst kaldkirja võimalik teha nii HTML-s kui CSS-s.
    <br/>Võta internetist pildi url, millel on .jpg või .png või .jpeg lõpp, lisa see url jutumärkide vahele.
    <br/>Pane tähele, et copy-paste siin ei tööta, sest Word muudab jutumärke  kasuta Visual Studios genereeritud jutumärke.
    </div>
    <img className='pilt' src="https://kukkur.swedbank.ee/wordpress/wp-content/uploads/2021/05/riplaani-koostamise-t-riist-1.jpg" alt=""/>
   </div> 
   
    
    <Link to=""> 
    <button>Avaleht</button>
    </Link>
    <Link to="kontakt">
    <button>Kontakt</button>
    </Link>
    <Link to="meist">
    <button>Meist</button>
    </Link>
    <Link to ="seaded">
    <br/>
    <button>Seadetesse</button>
    </Link>
    <Link to ="sonad">
    <br/>
    <button>Sõnad</button>
    </Link>
  
   
    <Routes>
      <Route path="" element={<Avaleht /> } />
      <Route path='kontakt' element={<Kontakt /> } />
      <Route path='meist' element={<Meist /> } />
      <Route path='seaded' element={<Seaded /> } />
      <Route path='sonad' element={<Sõnad /> } />
      

    </Routes>



  </div>);
}
export default App;