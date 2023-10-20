import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Particles from "./components/Particles"
import AboutMe from "./components/AboutMe"
import Services from "./components/Services"
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

function App() {

  return (
    <>
      <Particles />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
    </>
  );
}

export default App;