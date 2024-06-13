import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css'; // Flickity CSS 가져오기

const BookSlide = () => {
  const flickityNode = useRef(null);
  const flickityInstance = useRef(null);

  useEffect(() => {
    flickityInstance.current = new Flickity(flickityNode.current, {
      wrapAround: true,
      autoPlay: 5000, // 초 간격으로 자동 슬라이드
      cellAlign: 'center', // 슬라이드 정렬을 가운데로
      prevNextButtons: true, // 이전/다음 버튼 표시
      pageDots: true, // 페이지 점 표시
      setGallerySize: false, // 갤러리 크기 자동 조정 비활성화
      selectedAttraction: 0.01, // 슬라이드가 빨리 멈추도록 설정
      friction: 0.15, // 슬라이드가 더 부드럽게 이동하도록 설정
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            flickityInstance.current.playPlayer();
          } else {
            flickityInstance.current.stopPlayer();
          }
        });
      },
      { threshold: 0.5 } // 슬라이드가 뷰포트의 50% 이상 보일 때
    );

    observer.observe(flickityNode.current);

    return () => {
      observer.disconnect();
      flickityInstance.current.destroy(); // 컴포넌트 언마운트 시 Flickity 인스턴스 파괴
    };
  }, []);

  return (
    <div className="book-slide">
      <div className="book" ref={flickityNode}>
        <div className="book-cell">
          <div className="book-img">
            <img src="https://image.yes24.com/goods/123817641/XL" alt="BIG MAGIC" className="book-photo" />
          </div>
          <div className="book-content">
            <div className="book-title">전기기능사</div>
            <div className="book-author">에듀윌</div>
            <div className='book-desc'>필수 핵심이론 + CBT 대비 8개년 기출문제를 수록하였다.<br /> 에듀윌만의 특별혜택, 매월 제공되는 따끈따끈한 월간 CBT 모의고사가 제공된다.<br /> 2023 개정 용어 표준화 및 국문순화을 완벽 반영하였다.</div>
            <div className="book-see"><a href="https://www.yes24.com/Product/Goods/123817641" target="_blank" rel="noopener noreferrer">Buy Now</a></div>
          </div>
        </div>
        <div className="book-cell">
          <div className="book-img">
            <img src="https://image.yes24.com/goods/124219621/XL" alt="Ten Thousand Skies Above You" className="book-photo" />
          </div>
          <div className="book-content">
            <div className="book-title">정보처리기능사 실기</div>
            <div className="book-author">길벗</div>
            <div className='book-desc'>2024 시나공 정보처리기능사 실기 기본서는<br /> 기출문제를 면밀히 분석함으로써 출제 경향을 완벽하게 반영한 책으로,<br /> 매년 개정을 통해 최신 기출문제를 수록하고 있다.</div>
            <div className="book-see book-blue"><a href="https://www.yes24.com/Product/Goods/124832424" target="_blank" rel="noopener noreferrer">Buy Now</a></div>
          </div>
        </div>
        <div className="book-cell">
          <div className="book-img">
            <img src="https://image.yes24.com/goods/123183915/XL" alt="A Tale For The Time Being" className="book-photo" />
          </div>
          <div className="book-content">
            <div className="book-title">정보처리기능사 필기</div>
            <div className="book-author">길벗</div>
            <div className='book-desc'>2024 시나공 정보처리기능사 필기 기본서는<br /> 기출문제를 면밀히 분석함으로써 출제 경향을 완벽하게 반영한 책으로,<br /> 매년 개정을 통해 최신 기출문제를 수록하고 있습니다.</div>
            <div className="book-see book-pink"><a href="https://www.yes24.com/Product/Goods/123183915" target="_blank" rel="noopener noreferrer">Buy Now</a></div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default BookSlide;