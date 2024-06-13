import React from 'react'
import BookList from '../components/Booklist';
const Sobang = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/Sobang/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/Sobang/';
    const filePrefix = 'Sobang';
    return (
        <BookList
            title="미용사(소방)"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            filePrefix={filePrefix}
        />
    );
};
export default Sobang