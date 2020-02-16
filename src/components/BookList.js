import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      style={{ color: theme.syntax, background: theme.bg }}
      className='book-list'
    >
      <div className='book-list'>
        <ul>
          <li style={{ background: theme.ui }}>the way of kings</li>
          <li style={{ background: theme.ui }}>the name of wind</li>
          <li style={{ background: theme.ui }}>the final empire</li>
        </ul>
      </div>
    </div>
  );
};

export default BookList;
