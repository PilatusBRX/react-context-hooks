import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookContextProvider from './context/BookContext';
import NewBook from './components/BookForm';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBook />
      </BookContextProvider>
    </div>
  );
}

export default App;
