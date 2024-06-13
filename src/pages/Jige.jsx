import React from 'react'
import BookList from '../components/Booklist';
const Jige = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/Jige/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/Jige/';
    const filePrefix = 'Jige';
    return (
        <BookList
            title="미용사(지게)"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            filePrefix={filePrefix}
        />
    );
};
export default Jige