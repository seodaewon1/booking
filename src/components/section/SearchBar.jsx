// SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm.trim()); // 검색어를 상위 컴포넌트로 전달
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value); // 검색어 상태 업데이트
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="원하는 도서를 검색하세요!"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default SearchBar;
