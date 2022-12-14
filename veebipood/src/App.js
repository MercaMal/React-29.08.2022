import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HaldaTooteid from './pages/HaldaTooteid';
import LisaToode from './pages/LisaToode';
import Meist from './pages/Meist';
import Ostukorv from './pages/Ostukorv';
import Poed from './pages/Poed';
import Seaded from './pages/Seaded';
import MuudaToode from "./pages/MuudaToode"
import YksikToode from './pages/YksikToode';
import Koduleht from './pages/Koduleht';
import Tooted from './pages/Tooted';






function App() {
  return (
    <div>
      <img className="pilt" alt="Nobeauto" src="https://www.thecoolector.com/wp-content/uploads/2018/06/nb3.jpg" />
      <Link to="/">
       <button className='menyynupp'>Avaleht </button>
      </Link>
      <Link to="lisa-toode">
       <button className='menyynupp'>Lisa toode </button>
      </Link>
      <Link to="meist">
       <button className='menyynupp'>Meist </button>
      </Link>
      <Link to="ostukorv">
       <button className='menyynupp'>Ostukorv</button>
      </Link>
      <Link to="seaded">
       <button className='menyynupp'>Seaded</button>
      </Link>
      <Link to="poed">
      <button className='menyynupp'>Poed</button>
     </Link>
     <Link to="halda">
      <button className='menyynupp'>Halda Tooteid</button>
     </Link>
     <Link to="tooted">
      <button className='menyynupp'>Tooted</button>
     </Link>
     
      

      <Routes>
       <Route path=""element={ <Koduleht />} />
       <Route path="lisa-toode"element={ <LisaToode />} />
       <Route path="meist"element={ <Meist />} />
       <Route path="ostukorv"element={ <Ostukorv />} />
       <Route path="seaded"element={ <Seaded />} />
       <Route path="poed"element={ <Poed />} />
       <Route path="halda"element={ <HaldaTooteid />} />
       <Route path="muuda/:index" element={ <MuudaToode />} />
       <Route path="toode/:j2rjekorraNumber" element={ <YksikToode />} />
       <Route path="*" element={ <div>Lehekülge ei leitud</div>} />
       <Route path="tooted"element={ <Tooted />} />
       
       
      

      </Routes>


    </div>

  );
}
export default App;
