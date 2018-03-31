import React from 'react';
import { connect } from 'react-redux';
import { startRemoveOption } from '../actions/options';

export const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.option.text}
    </p>
    <button className="button button--link" onClick={() => props.onRemove(props.option.id)}>
      Remove
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(startRemoveOption(id)),
});

export default connect(undefined, mapDispatchToProps)(Option);
