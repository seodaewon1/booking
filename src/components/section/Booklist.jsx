import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // 검색 바 컴포넌트 import
import 'react-datepicker/dist/react-datepicker.css';
import ButtonGrid from '../section/ButtonGrid';
import BookModal from './BookModal'; // BookModal 컴포넌트 import
<<<<<<< HEAD
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
=======
>>>>>>> 4c948b7401b336ed7b5047a22307eadb2bd1f30f

const BookList = ({ title, kyoboBaseURL, yes24BaseURL, aladinBaseURL, filePrefix }) => {
    const [kyoboBooks, setKyoboBooks] = useState([]);
    const [yes24Books, setYes24Books] = useState([]);
    const [aladinBooks, setAladinBooks] = useState([]);
<<<<<<< HEAD
    const [fetchDate, setFetchDate] = useState(new Date('2024-06-16')); // 시작 날짜를 6월 16일로 설정
=======
    const [fetchDate, setFetchDate] = useState(new Date('2024-06-13')); // 시작 날짜를 6월 13일로 설정
>>>>>>> 4c948b7401b336ed7b5047a22307eadb2bd1f30f
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
<<<<<<< HEAD
                    throw new Error(`Kyobo 서버 응답 에러: ${kyoboResponse.status}`);
                }
                if (!yes24Response.ok) {
                    throw new Error(`Yes24 서버 응답 에러: ${yes24Response.status}`);
                }
                if (!aladinResponse.ok) {
                    throw new Error(`Aladin 서버 응답 에러: ${aladinResponse.status}`);
=======
                    throw new Error(`Kyobo server response error: ${kyoboResponse.status}`);
                }
                if (!yes24Response.ok) {
                    throw new Error(`Yes24 server response error: ${yes24Response.status}`);
                }
                if (!aladinResponse.ok) {
                    throw new Error(`Aladin server response error: ${aladinResponse.status}`);
>>>>>>> 4c948b7401b336ed7b5047a22307eadb2bd1f30f
                }

                const kyoboData = await kyoboResponse.json();
                const yes24Data = await yes24Response.json();
                const aladinData = await aladinResponse.json();

<<<<<<< HEAD
                setKyoboBooks(kyoboData.slice(0, 10));
                setYes24Books(yes24Data.slice(0, 10));
                setAladinBooks(aladinData.slice(0, 10));
            } catch (error) {
                console.error('도서 데이터를 가져오는 중 오류 발생:', error);
=======
                setKyoboBooks(kyoboData.slice(0, 5));
                setYes24Books(yes24Data.slice(0, 5));
                setAladinBooks(aladinData.slice(0, 5));
            } catch (error) {
                console.error('Error fetching books:', error);
>>>>>>> 4c948b7401b336ed7b5047a22307eadb2bd1f30f
            }
        };

        fetchBooks();
    }, [formattedDate, kyoboBaseURL, yes24BaseURL, aladinBaseURL, filePrefix]);

    // 검색어에 따라 도서 목록을 필터링하는 함수
    const filterBooks = (books) => {
        return books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
<<<<<<< HEAD
    };
=======
    }; 
>>>>>>> 4c948b7401b336ed7b5047a22307eadb2bd1f30f

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
                    {/* 검색 바 컴포넌트 */}
                    <SearchBar onSearch={handleSearch} />

<<<<<<< HEAD
                    <div>
                        <h1>교보문고<span><Link to={`/kyobo/${filePrefix}`}>더보기</Link></span></h1>
                        <Swiper
                            spaceBetween={30}

                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            slidesPerView={5} // 한 슬라이드에 하나의 항목만 표시
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {filterBooks(kyoboBooks).map((book, index) => (
                                <SwiperSlide key={index}>
                                    <li className="book-item" onClick={() => handleBookClick(book)}>
                                        <span className="book-rank">{index + 1}</span>
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

                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            slidesPerView={5} // 한 슬라이드에 하나의 항목만 표시
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {filterBooks(yes24Books).map((book, index) => (
                                <SwiperSlide key={index}>
                                    <li className="book-item" onClick={() => handleBookClick(book)}>
                                        <span className="book-rank">{index + 1}</span>
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

                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            slidesPerView={5} // 한 슬라이드에 하나의 항목만 표시
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {filterBooks(aladinBooks).map((book, index) => (
                                <SwiperSlide key={index}>
                                    <li className="book-item" onClick={() => handleBookClick(book)}>
                                        <span className="book-rank">{index + 1}</span>
                                        <img src={book.imageURL} alt={book.title} className="book-image" />
                                        <h3>{book.title}</h3>
                                        <p>{book.author}</p>
                                    </li>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
=======
                    <h1>교보문고<span><Link to={`/kyobo/${filePrefix}`}>더보기</Link></span></h1>
                    <ul className="book-list">
                        {filterBooks(kyoboBooks).map((book, index) => (
                            <li key={index} className="book-item" onClick={() => handleBookClick(book)}>
                                <span className="book-rank">{index + 1}</span>
                                <img src={book.imageURL} alt={book.title} className="book-image" />
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                            </li>
                        ))}
                    </ul>

                    <h1>Yes24<span><Link to={`/yes24/${filePrefix}`}>더보기</Link></span></h1>
                    <ul className="book-list">
                        {filterBooks(yes24Books).map((book, index) => (
                            <li key={index} className="book-item" onClick={() => handleBookClick(book)}>
                                <span className="book-rank">{index + 1}</span>
                                <img src={book.imageURL} alt={book.title} className="book-image" />
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                            </li>
                        ))}
                    </ul>

                    <h1 className='green'>알라딘 <span><Link to={`/aladin/${filePrefix}`}>더보기</Link></span></h1>
                    <ul className="book-list">
                        {filterBooks(aladinBooks).map((book, index) => (
                            <li key={index} className="book-item" onClick={() => handleBookClick(book)}>
                                <div className='book_top'>
                                    <span className="book-rank">{index + 1}</span>
                                    <img src={book.imageURL} alt={book.title} className="book-image" />
                                </div>
                                <div className='book_bottom'>
                                    <h3>{book.title}</h3>
                                    <p>{book.author}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

>>>>>>> 4c948b7401b336ed7b5047a22307eadb2bd1f30f
            {/* 모달 창 */}
            <BookModal isOpen={isModalOpen} onRequestClose={closeModal} book={selectedBook} />
        </div>
    );
};

export default BookList;
