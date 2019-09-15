import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ toggleModal }) => (
  <div className="overlay" onClick={toggleModal}>
    <div className="modal">
      <h2>Title</h2>
      <p>
        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsum
      </p>
    </div>
  </div>
);

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  // bla: 'test',
};

export default Modal;
