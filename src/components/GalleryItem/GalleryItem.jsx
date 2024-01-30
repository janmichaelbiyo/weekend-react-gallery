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
      <div
        data-testid="toggle"
        onClick={() => setGalleryPicture(!galleryPicture)}
      >
        {galleryPicture ? (
          <img src={galleryData.url} />
        ) : (
          <p data-testid="description"> {galleryData.description} </p>
        )}
      </div>

      <p> {galleryData.title} </p>

      <p>{galleryData.likes}</p>
      <button data-testid="like" onClick={() => updateLikes(galleryData.id)}>
        You Like That!
      </button>
    </div>
  );
}

export default GalleryItem;
