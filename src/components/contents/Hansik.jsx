// src/pages/Hansik.jsx
import React from 'react';
import BookDetails from '../components/BookDetails';

const Hansik = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/Hansik/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/Hansik/';
    const filePrefix = 'Hansik';

    return (
        <BookDetails
            title="한식조리기능사"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            filePrefix={filePrefix}
        />
    );
};

export default Hansik;
