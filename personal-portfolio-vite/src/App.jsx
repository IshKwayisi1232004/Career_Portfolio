import './App.css';
// import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home";
import { About } from "./components/AboutPage";
import { Contact } from "./components/Contactpage";
import { Skills } from "./components/SkillsPage";
import { Experience } from "./components/ExperiencePage";
// import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

