import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList, refreshGallery }) {
  return galleryList.map((galleryData) => {
    return (
      <GalleryItem galleryData={galleryData} refreshGallery={refreshGallery} />
    );
  });
}

export default GalleryList;
