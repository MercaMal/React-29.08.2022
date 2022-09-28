import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';
function App() {
  return (
    <div className="App">

    <a className="twitter-button" href="https://twitter.com/home">
{/* twitter nupp ei vii mind  lehele localis*/}
      <img className='twitter-button img' src="/twitter.png" alt="" />
      <span>Twitter</span>
    {/* a käib hrefiga kokku */}
      </a>
      <iframe className='youtube' width="200" height="100" src="https://www.youtube.com/embed/xMV6l2y67rk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <img className= "main-picture" src="https://raamid.ee/wp-content/uploads/peegel.jpg" alt="portoolio" />
      <div className="navigation-pictures">
        <Link to="work">
        <img src="https://www.vector-eps.com/wp-content/gallery/office-girl-vectors/office-girl-vector3.jpg" alt="" />
        </Link>
        <Link to="hobbies">
        <img src="https://cdn.freeprintablecoloringpages.net/thumbs/Dance/Happy_Woman_Dancer.png" alt="" />
        </Link>
        <Link to="courses">
        <img src="https://smifinancialcoaching.com/wp-content/uploads/2015/09/Woman-taking-CE-courses-600x400.jpg" alt="" />
        </Link>
       </div>

        <Routes>
          <Route path='work' element={<Work />} />
          <Route path='hobbies' element={<Hobbies />} />
          <Route path='courses' element={<Courses /> } />
        </Routes>


       

    </div>
  );
}

export default App;
