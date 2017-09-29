import React from 'react';
import Note from './Note.jsx';
import NoteForm from './NoteForm.jsx';
import {connect} from 'react-redux';

class List extends React.Component {
  render() {
    return (
      <div>
        <NoteForm />
        {
          this.props.arrNote.map((note, index) => {
            return (
              <Note key={index} index={index}>{note}</Note>
            );
          })
        }
      </div>
    );
  }
};

module.exports = connect(function(state) {
  return {arrNote: state.arrNote};
})(List);