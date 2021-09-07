import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleValueChange = event => {
    this.setState({ searchValue: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    const { searchValue } = this.state;
    event.preventDefault();

    if (searchValue.trim() === '') {
      return alert('заполните поле для поиска');
    }

    this.props.onSubmit(searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <>
        <header className={s.searchbar}>
          <form onSubmit={this.handleSubmit} className={s.form}>
            <button type="submit" className={s.button}>
              <span className={s.button_label}>Search</span>
            </button>

            <input
              className={s.input}
              type="text"
              autoComplete="off"
              value={this.state.searchValue}
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleValueChange}
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
