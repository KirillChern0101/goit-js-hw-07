import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);
// // Change code below this line
const gallery = document.querySelector(".gallery");
const markup = createGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", onClick);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
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
}

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") return;

  const isItemImage = evt.target.classList.contains("gallery__image");
  if (!isItemImage) return;
  const imgUrl = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${imgUrl}" width="1280" height="auto"/>`,

    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(evt) {
    const ESCAPE = "Escape";
    const isEscKey = evt.code === ESCAPE;
    if (!isEscKey) return;
    instance.close();
  }
}
