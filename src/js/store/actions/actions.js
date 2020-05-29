import * as action_types from "./action-types";

export const addBookToList = (book) => {
  return {
    type: action_types.ADD_BOOK,
    payload: book,
  };
};

export const removeBook = (book_id) => {
  return {
    type: action_types.REMOVE_BOOK,
    payload: book_id,
  };
};
