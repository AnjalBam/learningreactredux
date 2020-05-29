import React, { Component } from "react";
import "./App.css";
import List from "./js/components/List";
import NewBookForm from "./js/components/NewBookForm";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Readers!</h1>
        <List />
        <NewBookForm />
      </div>
    );
  }
}

export default App;
