import { galleryItems } from './gallery-items.js';
// Change code below this line

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

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const openEl = evt.target.dataset.source;
  openModal(openEl);
};

function openModal(openEl) {
  const instance = basicLightbox.create(`<img width="1400" height="900" src="${openEl}">`);
   instance.show();
    
  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      instance.close();
    }
  });
}
