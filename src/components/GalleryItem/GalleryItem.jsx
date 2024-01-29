import { updateGallery } from '../../galleryAPI/gallery.api.js';

import { useState } from 'react';

function GalleryItem({ galleryData }) {
  return (
    <div data-testid="galleryItem" className="galleryItem">
      <img src={galleryData.url} />

      <p> {galleryData.descriptions} </p>

      <p> {galleryData.likes}</p>
    </div>
  );
}

export default GalleryItem;
