import { updateGallery } from '../../galleryAPI/gallery.api.js';

import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem({ galleryData }) {
  const [galleryPicture, setGalleryPicture] = useState([]);
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
      <button onClick={(event) => updateLikes(galleryData.id)}>
        You Like That!
      </button>
    </div>
  );
}

export default GalleryItem;
