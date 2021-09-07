import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default function Searchbar (props) {
  const [searchValue, setSearchValue] = useState('');
 
 const handleValueChange = event => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    // const { searchValue } = this.state;
    event.preventDefault();

    if (searchValue.trim() === '') {
      return alert('заполните поле для поиска');
    }

    props.onSubmit(searchValue);
    setSearchValue('');
  };


    return (
      <>
        <header className={s.searchbar}>
          <form onSubmit={handleSubmit} className={s.form}>
            <button type="submit" className={s.button}>
              <span className={s.button_label}>Search</span>
            </button>

            <input
              className={s.input}
              type="text"
              autoComplete="off"
              value={searchValue}
              autoFocus
              placeholder="Search images and photos"
              onChange={handleValueChange}
            />
          </form>
        </header>
      </>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
