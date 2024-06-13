import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

const BookList = ({ title, kyoboBaseURL, yes24BaseURL, filePrefix }) => {
    const [kyoboBooks, setKyoboBooks] = useState([]);
    const [yes24Books, setYes24Books] = useState([]);
    const [fetchDate, setFetchDate] = useState(new Date('2024-05-29')); // 시작 날짜를 5월 29일로 설정
    const formattedDate = fetchDate.toISOString().slice(0, 10); // YYYY-MM-DD 형식으로 변환

    useEffect(() => {
        const fetchBooks = async () => {
            const kyoboURL = `${kyoboBaseURL}${filePrefix}_${formattedDate}.json`;
            const yes24URL = `${yes24BaseURL}${filePrefix}_${formattedDate}.json`;

            try {
                const fetchKyobo = fetch(kyoboURL).then(response => response.json());
                const fetchYes24 = fetch(yes24URL).then(response => response.json());
                const [kyoboData, yes24Data] = await Promise.all([fetchKyobo, fetchYes24]);

                const kyoboBooksData = kyoboData.slice(0, 4);
                const yes24BooksData = yes24Data.slice(0, 4);

                setKyoboBooks(kyoboBooksData);
                setYes24Books(yes24BooksData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBooks();
    }, [formattedDate, kyoboBaseURL, yes24BaseURL, filePrefix]);

    return (
        <div className="Main__Home">
            <div className="Main__main">
                <div className="layout-container">
                    <h1>교보문고</h1>
                    <h2>{title}</h2>
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
                    <Link to={`/kyobo/${filePrefix}`}><span>전체보기</span></Link>
                    <h1>Yes24</h1>
                    <h2>{title} </h2>
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
                    <Link to={`/yes24/${filePrefix}`}><span>더보기</span></Link>
                </div>
            </div>
        </div>
    );
};

export default BookList;
