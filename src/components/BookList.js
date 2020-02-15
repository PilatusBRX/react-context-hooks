import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
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
  }
}
export default BookList;
