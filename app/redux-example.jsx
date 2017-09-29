let redux = require('redux');
let reducer = require('./reducer/reducer.jsx');

let store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

module.exports = store;