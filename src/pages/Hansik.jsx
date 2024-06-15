// src/pages/Hansik.jsx
import React from 'react';
import BookList from '../components/section/Booklist';

const Hansik = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/Hansik/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/Hansik/';
    const aladinBaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Aladin/Hansik/';
    const filePrefix = 'Hansik';

    return (
        <BookList
            title="한식조리기능사"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            aladinBaseURL={aladinBaseURL}
            filePrefix={filePrefix}
        />
    );
};

export default Hansik;
