import React from 'react';
import BookList from '../components/section/Booklist';
const JeongiSaneop = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/JeongiSaneop/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/JeongiSaneop/';
    const aladinBaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Aladin/JeongiSaneop/';
    const filePrefix = 'JeongiSaneop';
    return (
        <BookList
            title="전기산업기사"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            aladinBaseURL={aladinBaseURL}
            filePrefix={filePrefix}
        />
    );
};
export default JeongiSaneop;