import React from 'react';
import BookDetails from '../components/BookDetails';

const Geonseol = () => {
    const filePrefix = 'Geonseol';
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/Geonseol/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/Geonseol/';

    return (
        <BookDetails
            title="건설안전기사"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            filePrefix={filePrefix}
        />
    );
};

export default Geonseol;
