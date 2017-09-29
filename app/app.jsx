let React = require('react');
let ReactDOM = require('react-dom');

let List = require('./comps/List.jsx');
let Note = require('./comps/Note.jsx');
let NoteForm = require('./comps/NoteForm.jsx');

let {Provider} = require('react-redux'); // = let Provider = require('react-redux').Provider; --> ES6

let store = require('./redux-example.jsx');

ReactDOM.render(
  <Provider store={store}>
    <List/>
  </Provider>,
  document.getElementById('root')
);