const APY_KEY = '627da2a1fd1562255976a9680eb148cf';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

// trending/all/day?api_key=<<api_key>>
// .then(response => {
//     console.log(response)
// });
// .then(response => response.text())
// .then(data => console.log(data))

// .then(response => response.text())
// .then(data => console.log(JSON.parse(data)))

// .then(data => console.log(data))

const getData = url => fetch(url)

    .then(response => {
        if (response.ok) {
        return response.json();
    }
        throw `Что-то пошло не так, ошибка ${response.status}`
    })

    .catch(err => console.error(err));

export const getTriends = async (type = 'all', period = 'day', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${APY_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
}

export const getTopMovie = async (type = 'movie', page = 1) => {
    const url = `${BASE_URL}${type}/top_rated?api_key=${APY_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
}

export const getTopTv = async (type = 'tv', page = 1) => {
    const url = `${BASE_URL}${type}/top_rated?api_key=${APY_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
}

export const getPopularMovie = async (type = 'movie', page = 1) => {
    const url = `${BASE_URL}${type}/popular?api_key=${APY_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
}

export const getPopularTv = async (type = 'tv', page = 1) => {
    const url = `${BASE_URL}${type}/popular?api_key=${APY_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
}

export const getVideo = async (id, type) => {
    const url = `${BASE_URL}${type}/${id}/videos?api_key=${APY_KEY}${LANGUAGE}`;
    return await getData(url);
}

export const search = async (query, page) => {
    const url = `${BASE_URL}search/multi?api_key=${APY_KEY}${LANGUAGE}` +
    `&page=${page}&include_adult=false&query=${query}`;
    return await getData(url);
}

// https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US