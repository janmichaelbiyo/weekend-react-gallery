import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList, refreshGallery }) {
  return (
    <div data-testid="galleryList">
      {galleryList.map((galleryData) => (
        <div>
          <GalleryItem
            galleryData={galleryData}
            refreshGallery={refreshGallery}
          />
        </div>
      ))}
    </div>
  );
}

export default GalleryList;
