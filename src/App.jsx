import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopSection from './pages/ShopSection';
import About from './pages/About';
import ContactSection from './pages/ContactSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToTopButton from './components/ToTopButton';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
        <ToTopButton />
        <Footer />
    </Router>
  );
}