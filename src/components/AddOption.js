import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOption } from '../actions/options';

export class AddOption extends Component {
  state = {
    option: '',
    error: undefined,
  };

  onInputChange = event => {
    const option = event.target.value;
    this.setState(() => ({ option }));
  };

  handleAddOption = event => {
    event.preventDefault();
    const option = this.state.option.trim();
    let error;
    if (!option) {
      error = 'Enter valid value to add item';
    } else if (this.props.options.indexOf(option) > -1) {
      error = 'This option is already exists';
    } else {
      this.props.onAddOption(option);
    }
    this.setState(() => ({ error }));
    if (!error) {
      this.setState(() => ({ option: '' }));
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option-form" onSubmit={this.handleAddOption}>
          <input
            className="add-option-form__input"
            value={this.state.option}
            onChange={this.onInputChange}
            type="text"
            name="option"
            placeholder="Your option"
          />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  options: state.options,
});

const mapDispatchToProps = dispatch => ({
  onAddOption: option => dispatch(addOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOption);
