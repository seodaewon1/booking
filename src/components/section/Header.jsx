import React, { useState, useEffect } from 'react';

const Header = () => {

  return (
    <div className="header__wrap">
      <div className="logo"><a href="/">Booking</a></div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="https://www.q-net.or.kr/crf021.do?id=crf02103&gSite=Q&gId=&CST_ID=CRF_Stns_06" target="_blank" rel="noopener noreferrer">시험 일정</a>
            {/* <a href="https://www.q-net.or.kr/crf021.do?id=crf02103&gSite=Q&gId=&CST_ID=CRF_Stns_06" target="_blank" rel="noopener noreferrer">Schedule</a>
            <a href="https://www.q-net.or.kr/crf021.do?id=crf02103&gSite=Q&gId=&CST_ID=CRF_Stns_06" target="_blank" rel="noopener noreferrer">Schedule</a>
            <a href="https://www.q-net.or.kr/crf021.do?id=crf02103&gSite=Q&gId=&CST_ID=CRF_Stns_06" target="_blank" rel="noopener noreferrer">Schedule</a> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
