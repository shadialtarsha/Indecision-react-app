import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { resetOption } from '../actions/selectedOption';

export const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={() => {
      props.resetOption();
    }}
    ariaHideApp={false}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button
      className="button"
      onClick={() => {
        props.resetOption();
      }}
    >
      Okay
    </button>
  </Modal>
);

const mapStateToProps = state => ({
  selectedOption: state.selectedOption,
});

const mapDispatchToProps = dispatch => ({
  resetOption: () => dispatch(resetOption()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionModal);
