import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const BookshelfPage = () => {
    const [bookshelf, setBookshelf] = useState([]);
  
    useEffect(() => {
      const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
      setBookshelf(storedBookshelf);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    }, [bookshelf]);
  
    const addToBookshelf = (book) => {
      setBookshelf([...bookshelf, book]);
    };
  
    const removeFromBookshelf = (bookKey) => {
      const updatedBookshelf = bookshelf.filter((book) => book.key !== bookKey);
      setBookshelf(updatedBookshelf);
    };
  
    return (
      <div>
        <h2>My Bookshelf</h2>
        <ul>
          {bookshelf.map((book) => (
            <li key={book.key}>
              <BookCard book={book} onRemove={() => removeFromBookshelf(book.key)} />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BookshelfPage;