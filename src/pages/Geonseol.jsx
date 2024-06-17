import React from 'react';
import BookList from '../components/section/Booklist';

const Geonseol = () => {
    const filePrefix = 'Geonseol';
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/Geonseol/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/Geonseol/';
    const aladinBaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Aladin/Geonseol/';

    return (
        <BookList
            title="건설안전기사"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            aladinBaseURL={aladinBaseURL}
            filePrefix={filePrefix}
        />
    );
};

export default Geonseol;
