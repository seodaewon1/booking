import React from 'react';

const Card = ({ imageURL, title, author, price }) => (
  <li className="card book-item">
    <img src={imageURL} alt={title} className="book-image" />
    <div className="content">
      <h3 className="title">{title}</h3>
      <p>{author}</p>
      <p className="price">{price}</p>
      <button className="btn">View Details</button>
    </div>
  </li>
);

export default Card;
