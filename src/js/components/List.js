import React, { Component } from "react";
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

export class List extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.books.map((book) => {
            return (
              <li
                key={book.id}
                className="list-item"
                onClick={() => this.props.removeBook(book.id)}>
                {book.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
