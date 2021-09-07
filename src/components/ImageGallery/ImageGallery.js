import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ children }) {
  return (
    <div>
      <ul className={s.gallery}>{children}</ul>
    </div>
  );
}

ImageGallery.propTypes = {
  children: PropTypes.node,
};

export default ImageGallery;
