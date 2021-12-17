import { 
    getTriends,
    getTopMovie,
    getTopTv,
    getPopularMovie,
    getPopularTv,
    getTriends2, 
} from './services.js';
import renderCards from './renderOtherCard.js';

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const getNav = document.querySelectorAll('.get-nav');
console.log(getNav);

const menuLink = () => {
    getNav.forEach(nav => {
        nav.addEventListener('click', event => {
            
            const target = event.target.closest('.get-nav__link');
            
            if(target) {
                event.preventDefault();

                filmWeek.style.display = 'none';
                title.textContent = target.textContent;

                if (target.classList.contains('get-nav__link_triends')) {
                    // getTriends2()
                    // .then(data => data.results)
                    renderTrendsCards();
                }
                if (target.classList.contains('get-nav__link_top-movies')) {
                    renderTopMovieCards(20, 1);
                }
                if (target.classList.contains('get-nav__link_top-tv')) {
                    renderTopTvCards();
                }
                if (target.classList.contains('get-nav__link_popular-movies')) {
                    renderPopularMovieCards();
                }
                if (target.classList.contains('get-nav__link_popular-tv')) {
                    renderPopularTvCards();
                }
            }
        })
    })
};

const renderTrendsCards = async (cards = 12, page = 1) => {
    const data = await getTriends2('all','week', page);
    const [...otherCards] = data.results;
    otherCards.length = cards;
    renderCards(otherCards);
}

const renderTopMovieCards = async (cards = 12, page = 1) => {
    const data = await getTopMovie('movie', page);
    const [...otherCards] = data.results;
    otherCards.length = cards;
    renderCards(otherCards);
}

const renderTopTvCards = async (cards = 12, page = 1) => {
    const data = await getTopTv('tv', page);
    const [...otherCards] = data.results;
    otherCards.length = cards;
    renderCards(otherCards);
}

const renderPopularMovieCards = async (cards = 12, page = 1) => {
    const data = await getPopularMovie('movie', page);
    const [...otherCards] = data.results;
    otherCards.length = cards;
    renderCards(otherCards);
}

const renderPopularTvCards = async (cards = 12, page = 1) => {
    const data = await getPopularTv('tv', page);
    const [...otherCards] = data.results;
    otherCards.length = cards;
    renderCards(otherCards);
}

export default menuLink; 