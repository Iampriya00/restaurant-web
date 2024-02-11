import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import PagenotFound from './pages/PagenotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Review from './pages/Review';
import OurDishes from './pages/OurDishes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourdishes" element={<OurDishes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Review" element={<Review/>}/>
          <Route path="/pagenotfound" element={<PagenotFound />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;