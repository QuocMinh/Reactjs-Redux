let React = require('react');
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {addItem, toggle} from '../action.jsx';

class NoteForm extends React.Component {
  render() {
    if (this.props.isAdding) {
      return (
        <div>
          <form onSubmit={this.handleSave.bind(this)}>
            <input type="text" ref="txtNote" placeholder="Enter your note" />
            <button type="submit">Lưu</button>
          </form>
        </div>
      );
    }
    return <button onClick={this.toggle.bind(this)}>+</button>;
  }
  handleSave(e) {
    e.preventDefault(); // Disable loading page when click on submit button

    let {dispatch} = this.props;
    dispatch(addItem(this.refs.txtNote.value));
    dispatch(toggle());
  }
  toggle() {
    let {dispatch} = this.props;
    dispatch(toggle());
  }
};

module.exports = connect(function(state) {
  return {
    isAdding: state.isAdding
  };
})(NoteForm);