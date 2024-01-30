import { useState, useEffect } from 'react';

import { fetchGallery } from '../../galleryAPI/gallery.api.js';

import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryList, setGalleryList] = useState([]);

  const refreshGallery = () => {
    const galleryPromise = fetchGallery();
    galleryPromise
      .then((response) => {
        console.log('response', response);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log('this is bad', error);
      });
  };

  useEffect(() => {
    refreshGallery();
  }, []);

  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>
      <main>
        <p>The gallery goes here!</p>
        <GalleryList
          galleryList={galleryList}
          refreshGallery={refreshGallery}
        />
      </main>
    </div>
  );
}

export default App;
