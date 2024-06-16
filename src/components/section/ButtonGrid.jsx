import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { headermenus } from '../../data/headerMenu'; // 수정된 import 경로

const ButtonGrid = () => {
  const [activeButton, setActiveButton] = useState(0); // 활성화된 버튼 인덱스 상태 추가
  const location = useLocation(); // 현재 경로 가져오기

  useEffect(() => {
    // 현재 경로에 맞는 버튼 인덱스를 찾기
    const currentPath = location.pathname;
    const activeIndex = headermenus.findIndex(menu => menu.src === currentPath);
    setActiveButton(activeIndex);
  }, [location]); // 경로가 변경될 때마다 실행

  return (
    <div className='button-grid'>
      {headermenus.map((menu, index) => (
        <div
          key={index}
          className={`button-grid__button ${index === activeButton ? 'active' : ''}`}
        >
          <div className='button-title'>
            <Link to={menu.src} onClick={() => setActiveButton(index)}>
              {menu.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ButtonGrid;
