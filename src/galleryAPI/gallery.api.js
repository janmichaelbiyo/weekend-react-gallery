import axios from 'axios';

export const fetchGallery = () => {
  return axios.get('/api/gallery');
};

export const updateGallery = (galleryData) => {
  return axios.put(`/api/gallery/${galleryData}`);
};
