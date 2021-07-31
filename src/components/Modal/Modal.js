import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default function Modal({ children, onCloseModal }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    function handleKeydown(e) {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    }

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onCloseModal]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return (
    <div onClick={handleBackDropClick} className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
