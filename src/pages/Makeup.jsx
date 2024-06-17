import React from 'react'
import BookList from '../components/section/Booklist';
const Makeup = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/Makeup/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/Makeup/';
    const aladinBaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Aladin/Makeup/';
    const filePrefix = 'Makeup';
    return (
        <BookList
            title="미용사(메이크업)"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            aladinBaseURL={aladinBaseURL}
            filePrefix={filePrefix}
        />
    );
};
export default Makeup