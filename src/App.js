
import './App.css';
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import {Routes, Route as Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Link index path='/' element={<Home />} />
          <Link path='/about' element={<About />} />
          <Link path='/projects' element={<Projects />} />
          <Link path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}


export default App;
