import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
// import { Routes, Route as Link, useLocation } from "react-router-dom";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import particles from "./utils.js/particles";

function App() {
  // const location = useLocation();

  // const particlesInit = async (main) => {
  //   await loadFull(main);
  // };

  // const renderParticlesJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* {renderParticlesJsInHomePage && <Particles id="particles" options={particles} init={particlesInit} />} */}
      <NavBar />
        {/* <Routes>
          <Link index path="/" element={<Home />} />
          <Link path="/about" element={<About />} />
          <Link path="/projects" element={<Projects />} />
          <Link path="/contact" element={<Contact />} />
        </Routes> */}
        <Home />
        <About />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
