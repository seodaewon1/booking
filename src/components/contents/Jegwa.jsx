// src/pages/Jegwa.jsx
import React from 'react';
import BookList from '../components/Booklist';

const Jegwa = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/Jegwa/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/Jegwa/';
    const filePrefix = 'Jegwa';

    return (
        <BookList
            title="제과"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            filePrefix={filePrefix}
        />
    );
};

export default Jegwa;
