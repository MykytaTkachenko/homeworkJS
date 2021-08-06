const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const MIN_PICTURE_INDEX = 0;
const MAX_PICTURE_INDEX = 8;

const listOfPhotos = document.querySelector('.js-gallery');
const lightBox = document.querySelector('.js-lightbox');
const modalImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('button[data-action="close-lightbox"]');

for (let i = 0; i < galleryItems.length; i += 1) {
  const unitLi = document.createElement('li');
  unitLi.classList.add('gallery__item');
  listOfPhotos.appendChild(unitLi);
  const unitTagA = document.createElement('a');
  unitTagA.classList.add('gallery__link');
  unitTagA.setAttribute('href', galleryItems[i].original);
  unitLi.appendChild(unitTagA);
  const unitImage = document.createElement('img');
  unitImage.classList.add('gallery__image');
  unitImage.setAttribute('src', galleryItems[i].preview);
  unitImage.setAttribute('data-source', galleryItems[i].original);
  unitImage.setAttribute('alt', galleryItems[i].description);
  unitImage.setAttribute('data-index', [i]);
  unitTagA.appendChild(unitImage);
}

const imgBox = document.querySelectorAll('.gallery__image');

const openModal = (event) => {
  event.preventDefault();
  lightBox.classList.add('is-open');
  modalImage.setAttribute('src', event.target.getAttribute('data-source'));
  modalImage.setAttribute('alt', event.target.getAttribute('alt'));
  modalImage.setAttribute('data-index', event.target.getAttribute('data-index'));
}

const closeModal = (event) => {
  const closeModalFunction = () => {
    lightBox.classList.remove('is-open');
    modalImage.removeAttribute('src');
    modalImage.removeAttribute('alt');
    modalImage.removeAttribute('data-index');
  }

  if (event.type === 'keydown' && event.code === 'Escape') {
    closeModalFunction();
  }

  if (event.type === 'click') {
    closeModalFunction();
  }
}

const swipeKey = (event) => {

  let indexValue = Number.parseInt(modalImage.getAttribute('data-index'));

  const swipeProcces = (indexValue) => {
    modalImage.setAttribute('data-index', indexValue);
    modalImage.setAttribute('src', imgBox[indexValue].getAttribute('data-source'));
  }

  const getPreviuosIndex = (indexValue) => {
    if (indexValue === MIN_PICTURE_INDEX) {
      return MAX_PICTURE_INDEX;
    }
    return indexValue -= 1;
  }

  const getNextIndex = (indexValue) => {
    if (indexValue === MAX_PICTURE_INDEX) {
      return MIN_PICTURE_INDEX;
    }
    return indexValue += 1;
  }

  if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
    swipeProcces(getPreviuosIndex(indexValue));
  }

  if (event.code === 'ArrowRight' || event.code === 'KeyD') {
    swipeProcces(getNextIndex(indexValue));
  }
}

listOfPhotos.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
lightBox.addEventListener('click', closeModal);
window.addEventListener('keydown', closeModal);
window.addEventListener('keydown', swipeKey);
