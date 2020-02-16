import React from 'react';
import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
//contextprovider
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import BooksContextProvider from './context/BookContext';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BooksContextProvider>
            <BookList />
          </BooksContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
