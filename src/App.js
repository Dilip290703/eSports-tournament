import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import 'boxicons/css/boxicons.min.css';
import BgmiRegister from './components/BgmiRegister';
import CocRegister from './components/CocRegister';
import ValoRegister from './components/ValoRegister';
import FreeRegister from './components/FreeRegister';
import BgmiRules from './components/BgmiRules';
import CocRules from './components/CocRules';
import ValoRules from './components/ValoRules';
import FreeRules from './components/FreeRules';
import Success from './components/Success';

const slidesData = [
  {
    img: '/images/bgmi2.jpg',
    leftTitle: 'BG',
    rightTitle: 'MI',
    gameTitle: '[ Battlegrounds Mobile India ]',
    desc: 'Set in a virtual world, BATTLEGROUNDS MOBILE INDIA is a battle royale game where multiple players employ strategies to fight and be the last man standing on the battlegrounds.',
    register: '/bgmi-register',
    rules: '/bgmi-rules'
  },
  {
    img: '/images/coc.jpg',
    leftTitle: 'CO',
    rightTitle: 'C',
    gameTitle: '[ Clash of Clans ]',
    desc: 'Epic combat strategy game. Build your village, train your troops & go to battle! Mustachioed Barbarians, fire wielding Wizards, and other unique troops are waiting for you! Enter the world of Clash!',
    register: '/coc-register',
    rules: '/coc-rules'
  },
  {
    img: '/images/2.jpg',
    leftTitle: 'VALO',
    rightTitle: 'RANT',
    gameTitle: '[ Valorant ]',
    desc: 'Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world.',
    register: '/valo-register',
    rules: '/valo-rules'
  },
  {
    img: '/images/b.jpg',
    leftTitle: 'FREE',
    rightTitle: 'FIRE',
    gameTitle: '[ Free Fire ]',
    desc: 'Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival.',
    register: '/freefire-register',
    rules: '/freefire-rules'
  }
];

function Home({ slidesData, current, nextSlide, prevSlide }) {
  return (
    <div>
      <header className="header">
        <div className="esports">
          <Link to="/" className="logo">eSports</Link>
        </div>
        <div className="social-media">
          <Link to="#"><i className='bx bxl-twitter'></i></Link>
          <Link to="#"><i className='bx bxl-facebook'></i></Link>
          <Link to="#"><i className='bx bxl-telegram'></i></Link>
          <Link to="#"><i className='bx bxl-instagram'></i></Link>
        </div>
        <nav className="navbar">
          <Link to="/updates">News & Updates</Link>
          <a href="https://www.youtube.com/watch?v=6pXCN2BpKWc" target="_blank" rel="noopener noreferrer">Live eSports</a>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="banner">
        <div className="slider">
          {slidesData.map((slide, i) => (
            <div className={`slide${i === current ? ' active' : ''}`} key={i}>
              <img src={slide.img} alt="" />
              <div className="left-info">
                <div className="penetrate-blur">
                  <h1>{slide.leftTitle}</h1>
                </div>
                <div className="content">
                  <h3>{slide.gameTitle}</h3>
                  <p>{slide.desc}</p>
                  <div className="btn-group">
                    <Link to={slide.register} className="btn">Register</Link>
                    <Link to={slide.rules} className="btn">Rules & Regulations</Link>
                  </div>
                </div>
              </div>
              <div className="right-info">
                <h1>{slide.rightTitle}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="navigation">
          <span className="prev-btn" onClick={prevSlide}>
            <i className='bx bx-chevron-left'></i>
          </span>
          <span className="next-btn" onClick={nextSlide}>
            <i className='bx bx-chevron-right'></i>
          </span>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slidesData.length);
  const prevSlide = () => setCurrent((current - 1 + slidesData.length) % slidesData.length);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              slidesData={slidesData}
              current={current}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
            />
          }
        />
        <Route path="/bgmi-register" element={<BgmiRegister />} />
        <Route path="/coc-register" element={<CocRegister />} />
        <Route path="/valo-register" element={<ValoRegister />} />
        <Route path="/freefire-register" element={<FreeRegister />} />
        <Route path="/bgmi-rules" element={<BgmiRules />} />
        <Route path="/coc-rules" element={<CocRules />} />
        <Route path="/valo-rules" element={<ValoRules />} />
        <Route path="/freefire-rules" element={<FreeRules />} />
        <Route path="/registration-success" element={<Success />} />
        {/* Add more routes for other registration and rules pages as needed */}
      </Routes>
    </Router>
  );
}

export default App;
