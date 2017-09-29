let arrReducer = (state = ['Android', 'iOS', 'NodeJS'], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [action.item, ...state];
    case 'REMOVE_ITEM':
      return state.filter((e, i) => i != action.index);

    default:
      return state;
  }
};

module.exports = arrReducer;