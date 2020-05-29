import * as action_types from "../actions/action-types";

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case action_types.ADD_BOOK:
      return {
        ...state,
        books: state.books.push(action.payload),
      };
    case action_types.REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export default bookReducer;
