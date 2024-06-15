import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="header__wrap">
      <div className="logo"><a href="/">Booking</a></div>
      <nav>
        <ul className="nav-links">
          <li>
            {/* 네비게이션 메뉴 */}
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="도서를 검색하세요"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
    </div>
  );
};

export default Header;
