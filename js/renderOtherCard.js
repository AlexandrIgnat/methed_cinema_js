const listCards = document.querySelector('.other-films__list');

const renderCards = data => {
    listCards.textContent = '';
   
    const dataCards = data.map((item) => {
        const card = document.createElement('li');
        card.className = 'other-films__item';
       

        const linkCard = document.createElement('a'); 
        if(item.vote_average) linkCard.dataset.rating = item.vote_average;
        linkCard.className = 'other-films__link';
        
        const img = document.createElement('img');
        img.className = 'other-films__img';
        img.alt = `постер ${item.title || item.original_name}`;
        img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`;
        
        card.append(linkCard);
        linkCard.append(img);
        return card;
    }
    ); 
     
    listCards.append(...dataCards);
    
}

export default renderCards; 