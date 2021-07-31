import { useState } from 'react';

import ImageGallery from './components/ImageGallery';
import Layout from './components/Layout';
import Searchbar from './components/Searchbar';

export default function App() {
  const [imageName, setImageName] = useState('');

  const handleFormSubmit = imageName => {
    setImageName(imageName);
  };

  return (
    <Layout>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery imageName={imageName} />
    </Layout>
  );
}
