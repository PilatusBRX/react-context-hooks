import React, { createContext, useReducer } from 'react';
import bookReducer from '../reducers/bookReducer';
import uuid from 'uuid/v4';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
