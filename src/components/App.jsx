import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Footer></Footer>
        {notes.map((note) => (
          <Note key={note.key} title={note.title} content={note.content} />
        ))}
      </React.Fragment>
    );
  }
}

export default App;
