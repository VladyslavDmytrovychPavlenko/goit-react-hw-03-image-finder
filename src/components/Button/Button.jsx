import React from 'react';
import { Btn } from './Button.styled';
import PropTypes from 'prop-types';
export const Button = ({ onClick }) => (
  <Btn type="button" onClick={onClick}>
    Load more
  </Btn>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
