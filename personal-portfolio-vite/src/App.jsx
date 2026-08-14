import './App.css';
// import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home";
import { Contact } from "./components/Contactpage";
// import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

