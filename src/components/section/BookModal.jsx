import React from 'react';
import Modal from 'react-modal';

const BookModal = ({ isOpen, onRequestClose, book }) => {
    const handleBuyClick = () => {
        if (book && book.url) {
            let url = book.url;
            // 만약 book.url에 https://www.yes24.com/가 포함되지 않으면 앞에 추가
            if (!book.url.includes('https://www.yes24.com/')) {
                url = `https://www.yes24.com/${book.url}`;
            }
            window.open(url, '_blank');
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Book Details"
            shouldCloseOnOverlayClick={true} // 모달 창 밖을 클릭하면 닫히도록 설정
            overlayClassName="ReactModal__Overlay"
            className="ReactModal__Content"
        >
            {book && (
                <div className="modal-content">
                    <h2>책 정보</h2>
                    <div className="modal-body">
                        <div className="modal-image">
                            <img src={book.imageURL} alt={book.title} />
                        </div>
                        <div className="modal-details">
                            <h3>{book.title}</h3>
                            <p>저자: {book.author}</p>
                            <p className="modal-price">
                                <span className="original-price">{book.originalPrice}</span>
                                <span className="discounted-price">가격: {book.price}</span>
                            </p>
                            <p>{book.description}</p>
                            <button className="buy-button" onClick={handleBuyClick}>구매하러가기</button>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default BookModal;
