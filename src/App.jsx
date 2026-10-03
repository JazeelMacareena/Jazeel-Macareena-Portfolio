import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Services from './pages/Services';
import Contact from './pages/Contact';

function RouteReset() {
  const location = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), [location.pathname]);
  return null;
}
function NotFound() {
  return <section className="container page-section not-found"><span className="eyebrow">NOT FOUND</span><h1>Let’s get you back to the portfolio.</h1><a className="btn btn-dark" href="/">Back home ↗</a></section>;
}
export default function App() {
  return <div className="app-shell"><RouteReset /><Navbar /><main className="page-transition"><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/projects" element={<Projects />} /><Route path="/education" element={<Education />} /><Route path="/services" element={<Services />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></main><Footer /></div>;
}
