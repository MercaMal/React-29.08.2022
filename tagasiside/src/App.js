
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';




function App() {
  return (
    <div>
     
      <Link to= "/">
      <button>Avalehele</button>
      </Link>
      <Link to= "/tagasiside">
    <button>Tagasisidede lehele</button>
    </Link>
    <Link to= "/tagasisideAndjad">
    <button>Vaata kes tagasisidet on andnud</button>
    </Link>
   
    <Routes>
      <Route path=""exact element={<div>Tere</div>} />
      <Route path= "/tagasiside" exact element={<Tagasiside/>} />
      <Route path= "/tagasisideAndjad" exact element={<TagasisideAndjad/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
