
import {Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from "./pages/Avaleht" ;
import Kontakt from "./pages/Kontakt" ;
import Meist from "./pages/Meist" ;
import Uudised from './pages/Uudised';
import LisaUudis from './pages/LisaUudis';


function App() {
  return (
    <div className="App">
    <div className='navigation-buttons'>

      <Link to="/">
        <button className="nupp">Avalehele</button>
      </Link>
      <Link to="uudised">
        <button className='nupp'>Uudiste lehele</button>
      </Link>
      <Link to="kontakt">
        <button className='nupp'>Võta meiega ühendust</button>
      </Link>
      <Link to="meist">
        <button className='nupp'>Info meist</button>
      </Link>
      <Link to="LisaUudis">
        <button className='nupp'>Lisa Uudis</button>
      </Link>
      </div>
      

    
      <Routes>
        <Route path="" element={<Avaleht/>}/>
        <Route path="uudised" element={<Uudised/>} />
        <Route path="kontakt" element={<Kontakt/>}/>
        <Route path="meist" element={<Meist/>} />
        <Route path="LisaUudis" element={<LisaUudis/>} />
      </Routes>

    </div>
  );
}

export default App;
