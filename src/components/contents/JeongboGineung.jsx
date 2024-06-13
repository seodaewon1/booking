import React from 'react'
import BookList from '../components/Booklist';
const JeongboGineung = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/JeongboGineung/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/JeongboGineung/';
    const filePrefix = 'JeongboGineung';
    return (
        <BookList
            title="정보기능사"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            filePrefix={filePrefix}
        />
    );
};
export default JeongboGineung;