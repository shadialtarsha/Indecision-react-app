import React from 'react';

import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';

const IndecisionApp = () => {
  const subtitle = 'Put your life in the hands of computer';
  return (
    <div>
      <Header subtitle={subtitle} />
      <div className="container">
        <Action />
        <div className="widget">
          <Options />
          <AddOption />
        </div>
      </div>
      <OptionModal />
    </div>
  );
};

export default IndecisionApp;
