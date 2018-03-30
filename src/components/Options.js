import React from 'react';
import { connect } from 'react-redux';

import Option from './Option';
import { removeAll } from '../actions/options';

export const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        onClick={() => {
          props.onRemoveAll();
        }}
        className="button button--link"
      >
        RemoveAll
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
    <div>
      {props.options.map((option, index) => (
        <Option key={option} count={index + 1} optionText={option} onRemove={props.onRemove} />
      ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  options: state.options,
});

const mapDispatchToProps = dispatch => ({
  onRemoveAll: () => dispatch(removeAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Options);
