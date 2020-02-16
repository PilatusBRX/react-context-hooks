import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';

const BookList = () => {
  const { books } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      style={{ color: theme.syntax, background: theme.bg }}
      className='book-list'
    >
      <div className='book-list'>
        <ul>
          {books.map(book => {
            return (
              <li style={{ background: theme.ui }} key={book.id}>
                {book.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
