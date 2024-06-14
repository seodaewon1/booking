import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import ButtonGrid from './ButtonGrid';

const BookList = ({ title, kyoboBaseURL, yes24BaseURL, aladinBaseURL, filePrefix }) => {
    const [kyoboBooks, setKyoboBooks] = useState([]);
    const [yes24Books, setYes24Books] = useState([]);
    const [aladinBooks, setAladinBooks] = useState([]);
    const [fetchDate, setFetchDate] = useState(new Date('2024-06-13')); // 시작 날짜를 6월 13일로 설정
    const formattedDate = fetchDate.toISOString().slice(0, 10); // YYYY-MM-DD 형식으로 변환

    useEffect(() => {
        const fetchBooks = async () => {
            const kyoboURL = `${kyoboBaseURL}${filePrefix}_${formattedDate}.json`;
            const yes24URL = `${yes24BaseURL}${filePrefix}_${formattedDate}.json`;
            const aladinURL = `${aladinBaseURL}${filePrefix}_${formattedDate}.json`;

            console.log('Fetching URLs:');
            console.log('Kyobo URL:', kyoboURL);
            console.log('Yes24 URL:', yes24URL);
            console.log('Aladin URL:', aladinURL);

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

                console.log('Kyobo Data:', kyoboData);
                console.log('Yes24 Data:', yes24Data);
                console.log('Aladin Data:', aladinData);

                setKyoboBooks(kyoboData.slice(0, 4));
                setYes24Books(yes24Data.slice(0, 4));
                setAladinBooks(aladinData.slice(0, 4));
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, [formattedDate, kyoboBaseURL, yes24BaseURL, aladinBaseURL, filePrefix]);

    return (
        <div className="Main__Home">
            <div className="Main__main">
                <div className="layout-container">
                    <ButtonGrid />
                    <h1 className='green'>교보문고</h1>
                    <ul className="book-list">
                        {kyoboBooks.map((book, index) => (
                            <li key={index} className="book-item">
                                <img src={book.imageURL} alt={book.title} className="book-image" />
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                                <p className='price'>{book.price}</p>
                            </li>
                        ))}
                    </ul>
                    <span><Link to={`/kyobo/${filePrefix}`}>전체보기</Link></span>
                    <ButtonGrid />
                    <h1 className='sky'>Yes24</h1>
                    <ul className="book-list">
                        {yes24Books.map((book, index) => (
                            <li key={index} className="book-item">
                                <img src={book.imageURL} alt={book.title} className="book-image" />
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                                <p className='price'>{book.price}</p>
                            </li>
                        ))}
                    </ul>
                    <span><Link to={`/yes24/${filePrefix}`}>더보기</Link></span>
                    <ButtonGrid />
                    <h1  className='green'>알라딘</h1>
                    <ul className="book-list">
                        {aladinBooks.map((book, index) => (
                            <li key={index} className="book-item">
                                <img src={book.imageURL} alt={book.title} className="book-image" />
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                                <p className='price'>{book.price}</p>
                            </li>
                        ))}
                    </ul>
                    <span><Link to={`/aladin/${filePrefix}`}>더보기</Link></span>
                </div>
            </div>
        </div>
    );
};

export default BookList;