import React from 'react'
import BookList from '../components/Booklist';
const JeongboGisa = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/JeongboGisa/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/JeongboGisa/';
    const aladinBaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Aladin/JeongboGisa/';
    const filePrefix = 'JeongboGisa';
    return (
        <BookList
            title="정보기사"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            aladinBaseURL={aladinBaseURL}
            filePrefix={filePrefix}
        />
    );
};
export default JeongboGisa;