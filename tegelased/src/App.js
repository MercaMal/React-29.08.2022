import {Link, Routes, Route} from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import LisaTegelane from "./pages/LisaTegelane";
import ValitudTegelased from "./pages/ValitudTegelased";
import './App.css';

function App() {
  return (
    <div >
      <Link to="/">
      <button>Avaleht</button>
      </Link>
      <Link to="LisaTegelane">
      <button>LisaTegelane</button>
      </Link>
      <Link to="ValitudTegelased">
      <button>ValitudTegelased</button>
      </Link>


      <Routes>
        <Route path ="" exact element={<Avaleht />} />
        <Route path ="LisaTegelane" exact element={<LisaTegelane />} />
        <Route path ="ValitudTegelased" exact element={<ValitudTegelased />} />

      </Routes>
    </div>
  );
}

export default App;
