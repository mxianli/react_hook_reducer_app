import React from 'react';
import '../index.css';

const ModalButton = props => (
  <button   onClick={props.handleClick}>
    {props.children}
  </button>);

export default ModalButton;