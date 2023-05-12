import React, { Component } from 'react';
import { Overlay, Mod } from './Modal.styled';
import PropTypes from 'prop-types';
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeFn();
    }
  };
  handleBackdrope = e => {
    if (e.currentTarget === e.target) {
      this.props.closeFn();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <Overlay onClick={this.handleBackdrope}>
        <Mod>{this.props.children}</Mod>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  closeFn: PropTypes.func.isRequired,
  loader: PropTypes.func.isRequired,
};
