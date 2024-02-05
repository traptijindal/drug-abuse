import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Councellor from './components/Councellor';
import Drug from './components/Drug';
import About from './components/About';
import Mental from './components/Mental';
import Tobaacoo from './components/Tobaacoo';
import MentalArticle from './components/MentalArticle';
import TobaccoArticle from './components/TobaccoArticle';
import DrugArticle from './components/DrugArticle';
import Programs from './components/Programs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/councellor" element={<Councellor />} />
        <Route path="/drug-abuse" element={<Drug />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/mental" element={<Mental />} />
        <Route path="/tobacco" element={<Tobaacoo />} />
        <Route path='/mental-article' element={<MentalArticle />}></Route>
        <Route path='/tobacco-article' element={<TobaccoArticle />}></Route>
        <Route path='/drug-article' element={<DrugArticle />}></Route>
      </Routes>
    </Router>
  )
}

export default App
