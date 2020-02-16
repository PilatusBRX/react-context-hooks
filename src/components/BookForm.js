import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_BOOK',
      book: {
        title,
        author
      }
    });

    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='book title'
        required
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='book author'
        required
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <input type='submit' value='add book' />
    </form>
  );
};

export default BookForm;
