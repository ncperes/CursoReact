import { React } from 'react';
import P from 'prop-types';

import './styles.css';

export const Button = ({ text, onClick, disabled = false }) => (
  <button disabled={disabled} onClick={onClick} className="btn-add-posts">
    {text}
  </button>
);

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
