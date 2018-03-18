import React, { Component } from 'react';

export default class AddOption extends Component {
  state = { error: undefined };

  handleAddOption = event => {
    event.preventDefault();
    const option = event.target.option.value.trim();
    const error = this.props.onAddOption(option);
    this.setState(() => ({ error }));
    if (!error) {
      event.target.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option-form" onSubmit={this.handleAddOption}>
          <input className="add-option-form__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
