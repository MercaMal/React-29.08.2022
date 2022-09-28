import { Link, Route, Routes} from "react-router-dom"
import './App.css';
import Avaleht from "./pages/Avaleht";
import VaataArvuteid from "./pages/VaataArvuteid";
import LisaArvuti from "./pages/LisaArvuti";



function App() {
  return (
    <div className="text"> 
      <Link to="/"> 
      <button className="nupp">Avalehele</button>
      </Link>
      <Link to="all">
      <button className="nupp">Vaata sülearvuteid</button>
      </Link>
      <Link to="add">
      <button className="nupp">Lisa sülearvuti</button>
      </Link>
      <Routes>
        <Route path="/" exact element={ <Avaleht />} />
        <Route path="all" exact element={<VaataArvuteid/>} />
        <Route path="add" exact element={<LisaArvuti/>} />
      </Routes>
    </div>
  );
}

export default App;
