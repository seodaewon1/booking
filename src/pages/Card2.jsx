import React from 'react';

const Card = ({ imageURL, title, author, price, url }) => (
  <li className="card book-item2">
    <img src={imageURL} alt={title} className="book-image2" />
    <div className="content">
      <h3 className="title">{title}</h3>
      <p>{author}</p>
      <p className="price">{price}</p>
      <button className="btn"><a href={url} target="_blank" rel="noopener noreferrer">buy now</a></button>
    </div>
  </li>
);

export default Card;
