import React, { children } from 'react';
import './Button.scss';
import classNames from 'classnames';

// size: large, medium, small
function Button({ children, size }) {
  return <button className={classNames('Button', size)}>{ children }</button>;
}

Button.defaultProps ={
    size : 'medium'
};

export default Button;
