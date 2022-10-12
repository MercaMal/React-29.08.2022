import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from "./pages/Avaleht" ;
import Kontakt from "./pages/Kontakt" ;
import Meist from "./pages/Meist" ;
import Uudised from './pages/Uudised';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';
function App() {
  return (
   <div> 
    <div>  
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      </div>
      

    
      <Routes>
        <Route path="" element={<Avaleht/>}/>
        <Route path="uudised" element={<Uudised/>} />
        <Route path="kontakt" element={<Kontakt/>}/>
        <Route path="meist" element={<Meist/>} />
        <Route path="LisaUudis" element={<LisaUudis/>} />
        <Route path="halda" element={<HaldaUudiseid/>} />
        <Route path="uudis/:index" element={<YksUudis/>} />
        <Route path="muuda/:index" element={<MuudaUudis/>} />

      </Routes>

    </div>
  );
}

export default App;
