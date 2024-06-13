import React, { useState, useEffect } from 'react';
import headermenus from '../../data/headerMenu';

const Header = () => {
  

  const [scrolled, setScrolled] = useState(false);
  const [buttonGridVisible, setButtonGridVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleButtonGrid = () => {
    setButtonGridVisible(!buttonGridVisible);
  };

  return (
    <div className="header__wrap">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">MyLogo</div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="https://www.q-net.or.kr/crf021.do?id=crf02103&gSite=Q&gId=&CST_ID=CRF_Stns_06" target="_blank" rel="noopener noreferrer">시험 일정</a></li>
          </ul>
        </nav>
        <div className='button-grid'>
          <span onClick={toggleButtonGrid}></span>
          {headermenus.map((menu, index) => (
            <div key={index} className={`button-grid__button ${buttonGridVisible ? 'visible' : ''}`}>
              <h2>
                <a href={menu.src}>{menu.title}</a>
              </h2>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Header;
