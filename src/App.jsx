import Header from "./components/Header";
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Aboutpage from "./pages/Aboutpage";
import Servicespage from "./pages/Servicespage";
import Contactpage from "./pages/Contactpage";
import Careerpage from "./pages/Careerpage";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUS";

function App() {
  return (
    <>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Servicespage" element={<Servicespage/>}/>
          <Route path="/Careerpage" element={<Careerpage/>}/>
           <Route path="/Contactpage" element={<Contactpage/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
