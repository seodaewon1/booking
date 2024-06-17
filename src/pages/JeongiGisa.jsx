import React from 'react'
import BookList from '../components/section/Booklist';
const JeongiGisa = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/JeongiGisa/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/JeongiGisa/';
    const aladinBaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Aladin/JeongiGisa/';
    const filePrefix = 'JeongiGisa';
    return (
        <BookList
            title="전기기사"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            aladinBaseURL={aladinBaseURL}
            filePrefix={filePrefix}
        />
    );
};
export default JeongiGisa