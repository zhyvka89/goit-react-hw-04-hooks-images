import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryList from '../ImageGalleryList';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import ImagesApi from '../../services/apiImageService';
const imagesApi = new ImagesApi();

export default function ImageGallery({ imageName }) {
  const [images, setImages] = useState([]);
  // const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (imageName === '') return;
    setImages([]);
    imagesApi.query = imageName;
    imagesApi.resetPage();
    getImages();

    // window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: 'smooth',
    // });
  }, [imageName]);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const handleLargeImage = image => {
    setLargeImage(image);
  };

  const getImages = () => {
    setLoading(true);

    setTimeout(() => {
      imagesApi
        .fatchImages()
        .then(({ hits }) => setImages(prev => [...prev, ...hits]))
        .catch(error => console.log(error))
        .finally(setLoading(false));
    }, 1000);
  };

  return (
    <>
      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <img src={largeImage} alt="pics" width="680" height="500" />
        </Modal>
      )}

      <ImageGalleryList
        images={images}
        toggleModal={toggleModal}
        handleLargeImage={handleLargeImage}
      />

      {images.length > 0 && !loading && (
        <Button title="Load More" cbonClick={getImages} />
      )}

      {loading && (
        <Loader
          type="Bars"
          color="#3f51b5"
          height={50}
          width={50}
          timeout={1000}
        />
      )}
    </>
  );
}

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
};
