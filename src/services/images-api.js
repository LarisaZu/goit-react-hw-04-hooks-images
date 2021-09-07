const fetchOptions = {
  API_KEY: '22270457-bda83cd2dccc8760a40b76a07',
  BASE_URL: 'https://pixabay.com/api/',
  PAGE: 1,
  ITEMS_PER_PAGE: 12,
};

function fetchApi(query, page) {
  const { API_KEY, BASE_URL, ITEMS_PER_PAGE } = fetchOptions;
  return fetch(`${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${ITEMS_PER_PAGE}
`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Nothing was found'));
  });
}

export { fetchApi, fetchOptions };
