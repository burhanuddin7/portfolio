import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import ScrollTop from './components/scrollTop/ScrollTop';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      
      <div className="main-content">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </div>

      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;