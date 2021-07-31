import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handleImageNameChange = e => {
    setImageName(e.currentTarget.value.toLowerCase());
  };

  const handlerSubmit = e => {
    e.preventDefault();
    onSubmit(imageName);
    setImageName('');
  };

  return (
    <header className={styles.searchbar}>
      <form onSubmit={handlerSubmit} className={styles.searchForm}>
        <button type="submit" className={styles.button}></button>

        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imageName}
          onChange={handleImageNameChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
