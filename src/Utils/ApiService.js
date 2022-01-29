const API_KEY = '?api_key=b7df999202e1c3618d01db23ce0076f0';
const BASE_URL = 'https://api.themoviedb.org/3';

async function ApiService(URL) {
  try {
    let responce = await fetch(URL);
    return await responce.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieTrending() {
  const URL = `${BASE_URL}/trending/movie/day${API_KEY}`;
  return ApiService(URL);
}

export async function getMovieById(id) {
  const URL = `${BASE_URL}/movie/${id}${API_KEY}&language=en-US`;
  return ApiService(URL);
}

export async function getMovieByName(name) {
  const URL = `${BASE_URL}/search/movie${API_KEY}&query=${name}&language=en-US&page=1`;
  return ApiService(URL);
}

export async function getCast(id) {
  const URL = `${BASE_URL}/movie/${id}/credits${API_KEY}&language=en-US`;
  return ApiService(URL);
}

export async function getReviews(id) {
  const URL = `${BASE_URL}/movie/${id}/reviews${API_KEY}&language=en-US&page=1`;
  return ApiService(URL);
}
