import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearchPage = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      const fetchSearchResults = async () => {
        if (query.trim()) {
          try {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
            setSearchResults(response.data.docs);
          } catch (error) {
            console.error('Error fetching search results:', error);
          }
        } else {
          setSearchResults([]);
        }
      };
  
      fetchSearchResults();
    }, [query]);
  
    const handleSearchChange = (event) => {
      setQuery(event.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search for a book..."
          value={query}
          onChange={handleSearchChange}
        />
        <ul>
          {searchResults.map((book) => (
            <li key={book.key}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
        <button>
          <a href="/bookshelf">View Bookshelf</a>
        </button>
      </div>
    );
  };
  
  export default BookSearchPage;