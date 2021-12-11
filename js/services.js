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

export const getTriends = async(type = 'all', period = 'day', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${APY_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
}