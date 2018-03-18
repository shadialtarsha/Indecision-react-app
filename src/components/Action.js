import React from 'react';

const Action = props => (
  <div>
    <button className="big-button" onClick={props.onHandlePick} disabled={!props.hasOptions}>
      What Should I do?
    </button>
  </div>
);

export default Action;
