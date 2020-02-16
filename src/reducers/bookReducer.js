import uuid from 'uuid/v1';

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.autor,
          id: uuid()
        }
      ];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id); // o "state" se refere aos books
    default:
      return state;
  }
};

export default bookReducer;
