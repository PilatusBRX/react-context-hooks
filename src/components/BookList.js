import React, { Component } from 'react';
class BookList extends Component {
  render() {
    return (
      <div>
        <h1>Booklist</h1>
        <div className='book-list'>
          <ul>
            <li>the way of kings</li>
            <li>the name of wind</li>
            <li>the final empire</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default BookList;
