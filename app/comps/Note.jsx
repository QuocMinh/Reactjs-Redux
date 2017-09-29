import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../action.jsx';

class Note extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.del.bind(this)}>Delete</button>
      </div>
    );
  }
  del() {
    let {dispatch, index} = this.props;
    dispatch(removeItem(index));
  }
};

module.exports = connect()(Note);