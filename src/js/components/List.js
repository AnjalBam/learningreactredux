import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    books: state.booksReducer.books,
  };
};

export class List extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.books.map((book) => {
            return <li key={book.id}>{book.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(List);
