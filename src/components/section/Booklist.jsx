import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import ButtonGrid from '../section/ButtonGrid';
import BookModal from './BookModal'; // BookModal 컴포넌트 import
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const BookList = ({ title, kyoboBaseURL, yes24BaseURL, aladinBaseURL, filePrefix }) => {
    const [kyoboBooks, setKyoboBooks] = useState([]);
    const [yes24Books, setYes24Books] = useState([]);
    const [aladinBooks, setAladinBooks] = useState([]);
    const [fetchDate, setFetchDate] = useState(new Date('2024-06-22')); // 시작 날짜를 6월 16일로 설정
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBook, setSelectedBook] = useState(null); // 선택된 책 정보 상태
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
    const formattedDate = fetchDate.toISOString().slice(0, 10); // YYYY-MM-DD 형식으로 변환

    useEffect(() => {
        const fetchBooks = async () => {
            const kyoboURL = `${kyoboBaseURL}${filePrefix}_${formattedDate}.json`;
            const yes24URL = `${yes24BaseURL}${filePrefix}_${formattedDate}.json`;
            const aladinURL = `${aladinBaseURL}${filePrefix}_${formattedDate}.json`;

            try {
                const [kyoboResponse, yes24Response, aladinResponse] = await Promise.all([
                    fetch(kyoboURL),
                    fetch(yes24URL),
                    fetch(aladinURL)
                ]);

                if (!kyoboResponse.ok) {
                    throw new Error(`Kyobo 서버 응답 에러: ${kyoboResponse.status}`);
                }
                if (!yes24Response.ok) {
                    throw new Error(`Yes24 서버 응답 에러: ${yes24Response.status}`);
                }
                if (!aladinResponse.ok) {
                    throw new Error(`Aladin 서버 응답 에러: ${aladinResponse.status}`);
                }

                const kyoboData = await kyoboResponse.json();
                const yes24Data = await yes24Response.json();
                const aladinData = await aladinResponse.json();

                setKyoboBooks(kyoboData.slice(0, 10));
                setYes24Books(yes24Data.slice(0, 10));
                setAladinBooks(aladinData.slice(0, 10));
            } catch (error) {
                console.error('도서 데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchBooks();
    }, [formattedDate, kyoboBaseURL, yes24BaseURL, aladinBaseURL, filePrefix]);

    // 검색어에 따라 도서 목록을 필터링하는 함수
    const filterBooks = (books) => {
        return books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    // 검색어 입력 시 상태 업데이트
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    // 책 아이템 클릭 시 모달 열기
    const handleBookClick = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    // 모달 닫기
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBook(null);
    };

    return (
        <div className="Main__Home">
            <div className="Main__main">
                <div className="layout-container">
                    <ButtonGrid />
                    <h1 className="book-ranking">실시간 랭킹</h1>
                    <div className='ranking'>
                        <div className="rank">
                            <h2>교보문고</h2>
                            {filterBooks(kyoboBooks.slice(0, 3)).map((book, index) => (
                                <ul key={index}>
                                    <li className="book-rank" onClick={() => handleBookClick(book)}>
                                        <img src={book.imageURL} alt={book.title} className="rank-image" />
                                        <div className="book-num">{index + 1}</div>
                                        <div className="rank-text">
                                            <h3>{book.title}</h3>
                                            <p>{book.author}</p>
                                        </div>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className="rank">
                            <h2>Yes24</h2>
                            {filterBooks(yes24Books.slice(0, 3)).map((book, index) => (
                                <ul key={index}>
                                    <li className="book-rank" onClick={() => handleBookClick(book)}>
                                        <img src={book.imageURL} alt={book.title} className="rank-image" />
                                        <div className="book-num">{index + 1}</div>
                                        <div className="rank-text">
                                            <h3>{book.title}</h3>
                                            <p>{book.author}</p>
                                        </div>
                                    </li>
                                </ul>
                            ))}</div>
                        <div className="rank">
                            <h2>알라딘</h2>
                            {filterBooks(aladinBooks.slice(0, 3)).map((book, index) => (
                                <ul key={index}>
                                    <li className="book-rank" onClick={() => handleBookClick(book)}>
                                        <img src={book.imageURL} alt={book.title} className="rank-image" />
                                        <div className="book-num">{index + 1}</div>
                                        <div className="rank-text">
                                            <h3>{book.title}</h3>
                                            <p>{book.author}</p>
                                        </div>
                                    </li>
                                </ul>
                            ))}</div>
                    </div>
                    <div>
                        <h1>교보문고<span><Link to={`/kyobo/${filePrefix}`}>더보기</Link></span></h1>
                        <Swiper
                            spaceBetween={30}
                            loop={true}
                            navigation={true}
                            slidesPerView={5} // 한 슬라이드에 하나의 항목만 표시
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {filterBooks(kyoboBooks).map((book, index) => (
                                <SwiperSlide key={index}>
                                    <li className="book-item" onClick={() => handleBookClick(book)}>
                                        <img src={book.imageURL} alt={book.title} className="book-image" />
                                        <h3>{book.title}</h3>
                                        <p>{book.author}</p>
                                    </li>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div>
                        <h1>Yes24<span><Link to={`/yes24/${filePrefix}`}>더보기</Link></span></h1>
                        <Swiper
                            spaceBetween={30}
                            loop={true}
                            navigation={true}
                            slidesPerView={5} // 한 슬라이드에 하나의 항목만 표시
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {filterBooks(yes24Books).map((book, index) => (
                                <SwiperSlide key={index}>
                                    <li className="book-item" onClick={() => handleBookClick(book)}>
                                        <img src={book.imageURL} alt={book.title} className="book-image" />
                                        <h3>{book.title}</h3>
                                        <p>{book.author}</p>
                                    </li>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div>
                        <h1 className='green'>알라딘 <span><Link to={`/aladin/${filePrefix}`}>더보기</Link></span></h1>
                        <Swiper
                            spaceBetween={30}
                            loop={true}
                            navigation={true}
                            slidesPerView={5} // 한 슬라이드에 하나의 항목만 표시
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {filterBooks(aladinBooks).map((book, index) => (
                                <SwiperSlide key={index}>
                                    <li className="book-item" onClick={() => handleBookClick(book)} >
                                        <img src={book.imageURL} alt={book.title} className="book-image" />
                                        <h3 title={book.title}>{book.title}</h3>
                                        <p>{book.author}</p>
                                    </li>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* 모달 창 */}
            <BookModal isOpen={isModalOpen} onRequestClose={closeModal} book={selectedBook} />
        </div>
    );
};

export default BookList;
