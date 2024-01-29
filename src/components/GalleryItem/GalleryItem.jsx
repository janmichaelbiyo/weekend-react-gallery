import { updateGallery } from '../../galleryAPI/gallery.api.js';

import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem({ galleryData, refreshGallery }) {
  const [galleryPicture, setGalleryPicture] = useState([]);

  const updateLikes = (galleryId) => {
    updateGallery(galleryId)
      .then((response) => {
        refreshGallery();
      })
      .catch((error) => {
        console.log('this is an issue', error);
      });
  };

  return (
    <div data-testid="galleryItem" className="galleryItem">
      <div onClick={() => setGalleryPicture(!galleryPicture)}>
        {galleryPicture ? (
          <img src={galleryData.url} />
        ) : (
          <p> {galleryData.description} </p>
        )}
      </div>

      <p> {galleryData.title} </p>

      <p> {galleryData.likes}</p>
      <button onClick={() => updateLikes(galleryData.id)}>
        You Like That!
      </button>
    </div>
  );
}

export default GalleryItem;
