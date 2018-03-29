import React from 'react';
import { connect } from 'react-redux';
import { selectOption } from '../actions/selectedOption';
import pickOption from '../selectors/pickOption';

const Action = props => (
  <div>
    <button
      className="big-button"
      onClick={() => {
        props.selectOption(pickOption(props.options));
      }}
      disabled={props.options.length === 0}
    >
      What Should I do?
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  selectOption: option => dispatch(selectOption(option)),
});

const mapStateToProps = state => ({
  options: state.options,
});

export default connect(mapStateToProps, mapDispatchToProps)(Action);
