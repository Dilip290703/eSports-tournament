import React, { useState } from 'react';
import './style.css';
import 'boxicons/css/boxicons.min.css';
const slidesData = [
  {
    img: '/images/bgmi2.jpg',
    leftTitle: 'BG',
    rightTitle: 'MI',
    gameTitle: '[ Battlegrounds Mobile India ]',
    desc: 'Set in a virtual world, BATTLEGROUNDS MOBILE INDIA is a battle royale game where multiple players employ strategies to fight and be the last man standing on the battlegrounds.',
    register: 'bgmi_regi_index.html',
    rules: 'bgmi_rules_index.html',
    audio: 'bgmi1.mp3'
  },
  {
    img: '/images/coc.jpg',
    leftTitle: 'CO',
    rightTitle: 'C',
    gameTitle: '[ Clash of Clans ]',
    desc: 'Epic combat strategy game. Build your village, train your troops & go to battle! Mustachioed Barbarians, fire wielding Wizards, and other unique troops are waiting for you! Enter the world of Clash!',
    register: 'coc_regi_index.html',
    rules: 'coc_rules_index.html'
  },
  {
    img: '/images/2.jpg',
    leftTitle: 'VALO',
    rightTitle: 'RANT',
    gameTitle: '[ Valorant ]',
    desc: 'Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world.',
    register: 'valo_regi_index.html',
    rules: 'valo_rules_index.html'
  },
  {
    img: '/images/b.jpg',
    leftTitle: 'FREE',
    rightTitle: 'FIRE',
    gameTitle: '[ Free Fire ]',
    desc: 'Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival.',
    register: 'free_regi_index.html',
    rules: 'free_rules_index.html'
  }
];

function App() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slidesData.length);
  const prevSlide = () => setCurrent((current - 1 + slidesData.length) % slidesData.length);

  return (
    <div>
      <header className="header">
        <div className="esports"><a href="#" className="logo">eSports</a></div>
        <div className="social-media">
          <a href="#"><i className='bx bxl-twitter'></i></a>
          <a href="#"><i className='bx bxl-facebook'></i></a>
          <a href="#"><i className='bx bxl-telegram'></i></a>
          <a href="#"><i className='bx bxl-instagram'></i></a>
        </div>
        <nav className="navbar">
          <a href="update_index.html">News & Updates</a>
          <a href="https://www.youtube.com/watch?v=6pXCN2BpKWc">Live eSports</a>
          <a href="contact_index.html">Contact</a>
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
                  {slide.audio && (
                    <audio id="backgroundAudio" preload="auto" autoPlay loop>
                      <source src={slide.audio} type="audio/mp3" />
                    </audio>
                  )}
                  <a href={slide.register} className="btn">Register</a>
                  <a href={slide.rules} className="btn">Rules & Regulations</a>
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

export default App;
