const API_KEY = '44100586-6dae9d5f9d68e136096a0f58f';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    return fetch(url).then(response => response.json());
}