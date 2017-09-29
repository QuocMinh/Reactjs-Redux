let redux = require('redux');
let arrReducer = require('./arrReducer.jsx');
let isAddingReducer = require('./isAddingReducer.jsx');

let reducer = redux.combineReducers({
  arrNote: arrReducer, 
  isAdding: isAddingReducer
});

module.exports = reducer;