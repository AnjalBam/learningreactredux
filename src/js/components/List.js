import React from "react";
import { connect } from "react-redux";
import * as ACTIONS from "../store/actions/actions";

const mapStateToProps = (state) => {
  return {
    books: state.booksReducer.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: (book_id) => dispatch(ACTIONS.removeBook(book_id)),
  };
};

export const List = (props) => {
  return (
    <div>
      {props.books.length ? (
        <ul>
          {props.books.map((book) => {
            return (
              <li
                key={book.id}
                className="list-item"
                onClick={() => props.removeBook(book.id)}>
                {book.title}
              </li>
            );
          })}
        </ul>
      ) : (
        <h4>Nothing to read.. Yay!!</h4>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
