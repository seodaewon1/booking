import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { LiaCalendarAltSolid } from "react-icons/lia";
import Card2 from '../pages/Card2'; // Card 컴포넌트 import

const BookDetails = () => {
    const { source, filePrefix } = useParams(); // 경로 매개변수 추출
    const [books, setBooks] = useState([]);
    const [fetchDate, setFetchDate] = useState(new Date('2024-06-13')); // 시작 날짜를 5월 29일로 설정
    const formattedDate = fetchDate.toISOString().slice(0, 10); // YYYY-MM-DD 형식으로 변환
    const today = new Date();

    useEffect(() => {
        const fetchBooks = async () => {
            console.log('source:', source); // source 값 확인
            console.log('filePrefix:', filePrefix); // filePrefix 값 확인

            let baseURL = '';
            if (source === 'kyobo') {
                baseURL = `https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/${filePrefix}/`;
            } else {
                baseURL = `https://raw.githubusercontent.com/kimyih/Book/main/Yes24/${filePrefix}/`;
            }
            const url = `${baseURL}${filePrefix}_${formattedDate}.json`;

            console.log('Fetching books from URL:', url); // URL 확인

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched data:', data); // 응답 데이터 확인
                setBooks(data); // 책 데이터를 설정
            } catch (error) {
                console.log('Error fetching books:', error); // 오류 로그
            }
        };
        fetchBooks();
    }, [source, formattedDate, filePrefix]);

    return (
        <div className="layout-container">
            <div className="BookDetails">
                <h1>{getKoreanFilePrefix(filePrefix)}</h1>
                <h2>{getSourceTitle(source)}</h2> {/* Display title */}
                <div className='date'>
                    <p>{formattedDate} 기준</p>
                    <div className='date2'>
                        <LiaCalendarAltSolid />
                        <DatePicker
                            selected={fetchDate}
                            onChange={(date) => setFetchDate(date)}
                            dateFormat="yyyy-MM-dd"
                            minDate={new Date('2024-05-29')}
                            maxDate={today}
                        />
                    </div>
                </div>

                <ul className="book-list2">
                    {books.length === 0 ? (
                        <p>책을 찾을 수 없습니다.</p> // 책이 없을 때 메시지 표시
                    ) : (
                        books.map((book, index) => (
                            <Card2
                                key={index}
                                imageURL={book.imageURL}
                                title={book.title}
                                author={book.author}
                                price={book.price}
                            />
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

const getKoreanFilePrefix = (filePrefix) => {
    switch (filePrefix) {
        case 'Geonseol':
            return '건설기능사';
        case 'hansik':
            return '한식기능사';
        case 'Jegwa':
            return '제과기능사';
        case 'JeongboGineung':
            return '정보처리기능사';
        case 'JeongiGisa':
            return '전기기사';
        case 'JeongiSaneop':
            return '전기산업기사';
        case 'Jeppang':
            return '제빵기능사';
        case 'Jige':
            return '지게차운전기능사';
        case 'IIban':
            return '미용사(일반)';
        case 'Makeup':
            return '미용사(메이크업)';
        case 'Nail':
            return '미용사(네일)';
        case 'Pibu':
            return '미용사(피부)';
        default:
            return filePrefix; // Return original if no translation available
    }
};
// Function to get source title (you can replace with actual translations)
const getSourceTitle = (source) => {
    switch (source) {
        case 'kyobo':
            return '교보문고';
        case 'yes24':
            return 'Yes24';
        case 'aladin':
            return '알라딘';
        default:
            return source; // Return original if no translation available
    }
};

export default BookDetails;