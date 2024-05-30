import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const query = input.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
    });
    return;
  }

  clearGallery();
  showLoader();

  fetchImages(query)
    .then(data => {
      if (data.hits.length === 0) {
          iziToast.error({
        position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again.',
        });
      } else {
        renderGallery(data.hits);
      }
    })
    .catch(error => {
        iziToast.error({
        position: 'topRight',
        message: 'Error',
      });
    })
    .finally(() => {
      hideLoader();
    });
}

function showLoader() {
  loader.classList.remove('hidden');
  loader.classList.add('visible');
}

function hideLoader() {
  loader.classList.remove('visible');
  loader.classList.add('hidden');
}
