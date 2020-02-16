import React, { createContext, useState } from 'react';
import uuid from 'uuid/v4';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: uuid() },
    { title: 'the final empire', author: 'brandon sanderson', id: uuid() },
    { title: 'name of the wind', author: 'patrick rothfuss', id: uuid() },
    { title: 'the final empire', author: 'brandon sanderson', id: uuid() },
    { title: 'name of the wind', author: 'patrick rothfuss', id: uuid() },
    { title: 'the final empire', author: 'brandon sanderson', id: uuid() }
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
    // setBooks([...books, { title: title, author: author, id: id }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
