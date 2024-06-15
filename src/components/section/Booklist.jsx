// BookList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // 검색 바 컴포넌트 import
import 'react-datepicker/dist/react-datepicker.css';
import ButtonGrid from '../section/ButtonGrid';

const BookList = ({ title, kyoboBaseURL, yes24BaseURL, aladinBaseURL, filePrefix }) => {
    const [kyoboBooks, setKyoboBooks] = useState([]);
    const [yes24Books, setYes24Books] = useState([]);
    const [aladinBooks, setAladinBooks] = useState([]);
    const [fetchDate, setFetchDate] = useState(new Date('2024-06-13')); // 시작 날짜를 6월 13일로 설정
    const [searchTerm, setSearchTerm] = useState('');
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
                    throw new Error(`Kyobo server response error: ${kyoboResponse.status}`);
                }
                if (!yes24Response.ok) {
                    throw new Error(`Yes24 server response error: ${yes24Response.status}`);
                }
                if (!aladinResponse.ok) {
                    throw new Error(`Aladin server response error: ${aladinResponse.status}`);
                }

                const kyoboData = await kyoboResponse.json();
                const yes24Data = await yes24Response.json();
                const aladinData = await aladinResponse.json();

                setKyoboBooks(kyoboData.slice(0, 6));
                setYes24Books(yes24Data.slice(0, 6));
                setAladinBooks(aladinData.slice(0, 6));
            } catch (error) {
                console.error('Error fetching books:', error);
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

    return (
        <div className="Main__Home">
            <div className="Main__main">
                <div className="layout-container">
                    <ButtonGrid />
                    {/* 검색 바 컴포넌트 */}
                    <SearchBar onSearch={handleSearch} />

                    <h1>교보문고<span><Link to={`/kyobo/${filePrefix}`}>더보기</Link></span></h1>
                    <ul className="book-list">
                        {filterBooks(kyoboBooks).map((book, index) => (
                            <li key={index} className="book-item">
                                <img src={book.imageURL} alt={book.title} className="book-image" />
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                            </li>
                        ))}
                    </ul>

                    <h1>Yes24<span><Link to={`/yes24/${filePrefix}`}>더보기</Link></span></h1>
                    <ul className="book-list">
                        {filterBooks(yes24Books).map((book, index) => (
                            <li key={index} className="book-item">
                                <img src={book.imageURL} alt={book.title} className="book-image" />
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                            </li>
                        ))}
                    </ul>

                    <h1 className='green'>알라딘 <span><Link to={`/aladin/${filePrefix}`}>더보기</Link></span></h1>
                    <ul className="book-list">
                        {filterBooks(aladinBooks).map((book, index) => (
                            <li key={index} className="book-item">
                                <img src={book.imageURL} alt={book.title} className="book-image" />
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BookList;
