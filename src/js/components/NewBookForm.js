import React, { useState } from "react";
import { connect } from "react-redux";
import * as ACTIONS from "../store/actions/actions";

// export class NewBookForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       book: { title: "", id: 0 },
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = (event) => {
//     this.setState({
//       book: { title: event.target.value, id: Math.random() * 10000 },
//     });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.addBookToList(this.state.book);
//     this.setState({
//       book: { title: "", id: 0 },
//     });
//   };
//   render() {
//     // console.log(this.props);

//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="name">Bookname:</label>
//           <input
//             type="text"
//             required
//             name="Book Name"
//             id="bookname"
//             value={this.state.book.title}
//             onChange={this.handleChange}
//           />
//           <input type="submit" value="Add Book +" />
//         </form>
//       </div>
//     );
//   }
// }

export const NewBookForm = (props) => {
  const [book, setBook] = useState({ title: "", id: 0 });

  const handleChange = (event) => {
    setBook({ title: event.target.value, id: Math.random() * 10000 });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBookToList(book);
    setBook({ title: "", id: 0 });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Bookname:</label>
        <input
          type="text"
          required
          name="Book Name"
          id="bookname"
          value={book.title}
          onChange={handleChange}
        />
        <input type="submit" value="Add Book +" />
      </form>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addBookToList: (book) => dispatch(ACTIONS.addBookToList(book)),
  };
}

export default connect(null, mapDispatchToProps)(NewBookForm);
