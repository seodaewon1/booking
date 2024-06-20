import React, { useState, useEffect } from 'react';

const Header = ({ source, filePrefix, formattedDate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      console.log('source:', source);
      console.log('filePrefix:', filePrefix);

      let baseURL = '';
      if (source === 'kyobo') {
        baseURL = `https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/${filePrefix}/`;
      } else if (source === 'yes24') {
        baseURL = `https://raw.githubusercontent.com/kimyih/Book/main/Yes24/${filePrefix}/`;
      } else if (source === 'aladin') {
        baseURL = `https://raw.githubusercontent.com/kimyih/Book/main/Aladin/${filePrefix}/`;
      }
      const url = `${baseURL}${filePrefix}_${formattedDate}.json`;

      console.log('Fetching books from URL:', url);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setBooks(data);
      } catch (error) {
        console.log('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, [source, formattedDate, filePrefix]);

  useEffect(() => {
    setFilteredBooks(
      books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, books]);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="header__wrap">
      <div className="layout-container">
        <div className="logo"><a href="/">BOOKING</a></div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        {searchTerm && (
          <div className="search-results">
            {filteredBooks.length > 0 ? (
              filteredBooks.map(book => (
                <div key={book.id} className="search-result-item" onClick={() => handleBookClick(book)}>
                  {book.title}
                </div>
              ))
            ) : (
              <div className="search-result-item">No results found</div>
            )}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedBook.title}</h2>
            <p>{selectedBook.description}</p>
            {/* 여기에 필요한 다른 책 정보도 추가 */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
