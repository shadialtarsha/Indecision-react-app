import React from 'react';
import { connect } from 'react-redux';
import { removeOption } from '../actions/options';

export const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optionText}
    </p>
    <button className="button button--link" onClick={() => props.onRemove(props.optionText)}>
      Remove
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onRemove: option => dispatch(removeOption(option)),
});

export default connect(undefined, mapDispatchToProps)(Option);
