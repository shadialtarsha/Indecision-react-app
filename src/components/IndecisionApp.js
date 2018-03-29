import React from 'react';

import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = { options: [], selectedOption: undefined };

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState(() => ({ selectedOption: option }));
  };

  handleDeleteSelectedOption = () => this.setState(() => ({ selectedOption: undefined }));

  handleDeleteOptions = () => this.setState(() => ({ options: [] }));

  handleDeleteOption = optionToRemove =>
    this.setState(prevState => ({ options: prevState.options.filter(option => option !== optionToRemove) }));

  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is already exists';
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  render() {
    const subtitle = 'Put your life in the hands of computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action hasOptions={this.state.options.length > 0} onHandlePick={this.handlePick} />
          <div className="widget">
            <Options
              options={this.state.options}
              onRemoveAll={this.handleDeleteOptions}
              onRemove={this.handleDeleteOption}
            />
            <AddOption onAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          onDeleteSelectedOption={this.handleDeleteSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
