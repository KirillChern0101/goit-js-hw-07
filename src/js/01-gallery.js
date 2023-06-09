// import { galleryItems } from "./gallery-items.js";

// console.log(galleryItems);
// // Change code below this line

// const gallery = document.querySelector(".gallery");
// const items = [];

// galleryItems.forEach((element) => {
//   const galleryItem = document.createElement("div");
//   galleryItem.className = "gallery__item";
//   const galleryLink = document.createElement("a");
//   galleryLink.className = "gallery__link";
//   galleryLink.href = element.original;
//   const galleryImage = document.createElement("img");
//   galleryImage.className = "gallery__image";
//   galleryImage.src = element.preview;
//   galleryImage.setAttribute("data-source", element.original);
//   galleryImage.alt = element.description;

//   galleryItem.append(galleryLink);
//   galleryLink.append(galleryImage);
//   items.push(galleryItem);
// });

// gallery.append(...items);

// gallery.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }

//   const selectedImage = e.target.getAttribute("data-source");

//   const instance = basicLightbox.create(`
//     <img src="${selectedImage}" width="800" height="600">
// `);

//   instance.show();

//   gallery.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       instance.close();
//     }
//   });
// });

import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const markup = createGalleryItemsMarkup(galleryItems);
galleryItems.insertAdjacentHTML("beforeend", markup);
galleryItems.addEventListener("click", onClick);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery_item">
    <a class="gallery_link" href="${original}">
      <img
      class="gallery_image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      ></img>
    </a>
    </li>`;
    })
    .join("");
}
