import { search as searchGet} from './services.js'
import  renderCards from './renderOtherCard.js'

const filmWeek = document.querySelector('.film-week');
const title = document.querySelector('.other-films__title');
const searchForm = document.querySelector('.header__search-form');
const searchInput = document.querySelector('.header__search-input');

const search = () => {
    searchForm.addEventListener('submit', event => {
        event.preventDefault();
        if (!searchInput.value) return;
        
        searchGet(searchInput.value)
         .then(data => {
             console.log('data : ', data);
             if (data.results.length) {
                 renderCards(data.results);
             } else {
                 throw 'sorry request is not finded'
             }
         })
         .then(() => {
             filmWeek.remove();
             title.textContent = 'Результат поиска';
         })
         .catch()
    })
}

export default search;