import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('ul.gallery');
const galleryImages = createGalleryImages(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryImages);

function createGalleryImages(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </li>`
  }).join('');
};

var lightbox = new SimpleLightbox('.gallery a', {
  enableKeyboard: true,
  captionsData: 'alt',
  captionDelay: 500,
  // fadeSpeed: 100,
  // rtl: true,
  // scrollZoom: false,
  // overlay: false,
  // spinner: false,
  // loop: false,
});

// console.log(lightbox);
