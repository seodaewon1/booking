// src/pages/IIban.jsx
import React from 'react';
import BookList from '../components/section/Booklist';

const IIban = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/IIban/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/IIban/';
    const aladinBaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Aladin/IIban/';
    const filePrefix = 'IIban';

    return (
        <BookList
            title="미용사 (일반)"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            aladinBaseURL={aladinBaseURL}
            filePrefix={filePrefix}
        />
    );
};

export default IIban;
