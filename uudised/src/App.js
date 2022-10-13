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
import { useTranslation } from 'react-i18next';
function App() {
   const { t, i18n } = useTranslation();

   const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);

   }
  return (
   <div> 
    <div>  
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Avaleht</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="uudised">{t('nav.uudised')}</Nav.Link>
            <Nav.Link as={Link} to="meist">{t('nav.meist')}</Nav.Link>
            <Nav.Link as={Link} to="kontakt">{t('nav.kontakt')}</Nav.Link>
            <Nav.Link as={Link} to="LisaUudis">{t('nav.lisa uudis')}</Nav.Link>
          </Nav>
          <img className='lang' onClick={()=>changeLang ("ee")} src= {require("./images/estonian.png")} alt="" />
          <img className='lang' onClick={()=>changeLang ("en")} src= {require("./images/english.png")} alt="" />
          <img className='lang' onClick={()=>changeLang ("ru")} src= {require("./images/russian.png")} alt="" />

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
