import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ images, onOpenModal }) {
  return (
    <>
      {images.map(({ webformatURL, tags, largeImageURL }) => (
        <li key={shortid.generate()} className={s.item}>
          <img
            src={webformatURL}
            alt={tags}
            className={s.image}
            onClick={() => onOpenModal(largeImageURL, tags)}
          />
        </li>
      ))}
    </>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
  onOpenModal: PropTypes.func,
};

export default ImageGalleryItem;
