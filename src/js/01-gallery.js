import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

const createGalleryMarkup = (items) => {
  return items
    .map(({ preview, original, description }) => {
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
      </li>`;
    })
    .join("");
};

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const isGalleryImage = event.target.classList.contains("gallery__image");
  if (!isGalleryImage) {
    return;
  }

  const source = event.target.dataset.source;
  openModal(source);
}

function openModal(source) {
  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
