import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Particles from "./components/Particles"
import AboutMe from './components/AboutMe';

function App() {

  return (
    <>
      <Particles />
      <Navbar />
      <Header />
      <AboutMe />
    </>
  );
}

export default App;