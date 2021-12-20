import {getVideo} from './services.js';
const listCards = document.querySelector('.other-films__list');

const renderCards = data => {
    listCards.textContent = '';
   
    Promise.all(data.map(async (item) => {
            const card = document.createElement('li');
            card.className = 'other-films__item';
           
            const video = await getVideo(item.id, item.media_type)
            const key = video.results[0]?.key;
            const linkCard = document.createElement('a'); 
            if(item.vote_average) linkCard.dataset.rating = item.vote_average;
            linkCard.className = 'other-films__link tube';
            if (key) linkCard.href = `https://youtu.be/${key}`
            
            const img = document.createElement('img');
            img.className = 'other-films__img';
            img.alt = `постер ${item.title || item.original_name}`;
            img.src = item.poster_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}` 
            : 'img/poster_none.png';
            
            card.append(linkCard);
            linkCard.append(img);
            return card;
        }
    )).then(cards => listCards.append(...cards)); 
    ;
     
    
    
}

export default renderCards; 