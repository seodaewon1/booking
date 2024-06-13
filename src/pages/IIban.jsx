// src/pages/IIban.jsx
import React from 'react';
import BookList from '../components/Booklist';

const IIban = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/IIban/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/IIban/';
    const filePrefix = 'IIban';

    return (
        <BookList
            title="미용사 (일반)"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            filePrefix={filePrefix}
        />
    );
};

export default IIban;
