import React from 'react'
import BookList from '../components/Booklist';
const Pibu = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/Pibu/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/Pibu/';
    const filePrefix = 'Pibu';
    return (
        <BookList
            title="미용사(피부)"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            filePrefix={filePrefix}
        />
    );
};
export default Pibu