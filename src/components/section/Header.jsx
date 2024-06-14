import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
      // 스크롤 여부에 따라 배경색 변경

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header__wrap">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo"><a href="/">Booking</a></div>
        <nav>
          <ul className="nav-links">
            <li><a href="https://www.q-net.or.kr/crf021.do?id=crf02103&gSite=Q&gId=&CST_ID=CRF_Stns_06" target="_blank" rel="noopener noreferrer">Schedule</a></li>
            <li><a href="https://product.kyobobook.co.kr/detail/S000001913217" target="_blank" rel="noopener noreferrer">Kyobo</a></li>
            <li><a href="https://www.yes24.com/Main/default.aspx?pid=123487&cosemkid=go15839092426763137&utm_source=google_pc&utm_medium=cpc&utm_campaign=book_pc&utm_content=ys_240530_google_pc_cc_book_pc_%u5bc3%uc38c%uc6f3%3f%u044b%uad8e%3f%ub6ae%ubc76&utm_term=%3f%u2464%uc52a%3f%uba78%ud0f3%u8e42%ub300%u0426%u6028%3f&gad_source=1&gclid=Cj0KCQjwsaqzBhDdARIsAK2gqndQ_cNAj6Bhm5wLFmvnBbdZD4XCOM7yJecvPg5eB14RKaP9VWb_wqAaAoLHEALw_wcB" target="_blank" rel="noopener noreferrer">
              Yes24</a></li>
            <li><a href="https://www.aladin.co.kr/m/main.aspx" target="_blank" rel="noopener noreferrer">Aladin</a></li>
          </ul>
        </nav>   
      </header>
    </div>
  );
};

export default Header;
