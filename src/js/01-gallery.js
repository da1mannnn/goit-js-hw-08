// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryOfImages = document.querySelector('ul.gallery');

galleryOfImages.style.listStyle = 'none';

const imagesMarkup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    (acc += `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`),
  ''
);

galleryOfImages.insertAdjacentHTML('beforeend', imagesMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});