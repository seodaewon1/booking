import React from 'react'
import BookList from '../components/Booklist';
const Nail = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/Nail/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/Nail/';
    const filePrefix = 'Nail';
    return (
        <BookList
            title="미용사(네일)"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            filePrefix={filePrefix}
        />
    );
};
export default Nail