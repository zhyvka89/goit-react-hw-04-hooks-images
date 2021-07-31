import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGalleryList.module.css';

const ImageGalleryList = ({ images, toggleModal, handleLargeImage }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(({ webformatURL, id, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            url={webformatURL}
            id={id}
            largeImage={largeImageURL}
            tags={tags}
            toggleModal={toggleModal}
            handleLargeImage={handleLargeImage}
          />
        );
      })}
    </ul>
  );
};

ImageGalleryList.propTypes = {
  images: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
  handleLargeImage: PropTypes.func.isRequired,
};

export default ImageGalleryList;
