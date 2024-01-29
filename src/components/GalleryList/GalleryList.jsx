import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList }) {
  return galleryList.map((galleryData) => {
    return <GalleryItem galleryData={galleryData} />;
  });
}

export default GalleryList;
