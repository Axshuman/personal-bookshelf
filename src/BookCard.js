import React from 'react';

const BookCard = ({ book, onRemove }) => {
  const { title, author_name, cover_i } = book;
  const coverURL = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : null;

  return (
    <div>
      <h3>{title}</h3>
      {author_name && <p>By {author_name}</p>}
      {coverURL && <img src={coverURL} alt={`Cover of ${title}`} />}
      {onRemove && <button onClick={onRemove}>Remove from Bookshelf</button>}
    </div>
  );
};

export default BookCard;