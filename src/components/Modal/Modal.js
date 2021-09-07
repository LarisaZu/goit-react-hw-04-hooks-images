import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './modal.module.css';

const modalRoot = document.querySelector('#root-modal');

class Modal extends Component {
  state = {
    src: '',
    alt: '',
  };

  handleImageChange = event => {
    console.log(event.target);
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
      console.log(event.code);
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.handleOverlayClick}>
        <div className={s.modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default Modal;
