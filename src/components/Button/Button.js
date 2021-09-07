import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ text, onIncrement }) => {
  return (
    <>
      <button type="button" className={s.button} onClick={onIncrement}>
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onIncrement: PropTypes.func,
};

export default Button;
