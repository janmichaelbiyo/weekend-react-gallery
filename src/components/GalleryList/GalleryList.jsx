import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList, refreshGallery }) {
  return galleryList.map((galleryData) => {
    return (
      <div data-testid="galleryList">
        <GalleryItem
          galleryData={galleryData}
          refreshGallery={refreshGallery}
        />
      </div>
    );
  });
}

export default GalleryList;
