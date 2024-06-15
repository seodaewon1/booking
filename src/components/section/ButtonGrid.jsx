import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { headermenus } from '../../data/headerMenu'; // 수정된 import 경로

const ButtonGrid = () => {
  const [activeButton, setActiveButton] = useState(0); // 활성화된 버튼 인덱스 상태 추가

  const handleClick = (index) => {
    setActiveButton(index); // 클릭된 버튼의 인덱스를 상태에 저장
  };

  return (
    <div className='button-grid'>
      {headermenus.map((menu, index) => (
        <div
          key={index}
          className={`button-grid__button ${index === activeButton ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <div className='button-title'>
            <Link to={menu.src}>{menu.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ButtonGrid;
