import { getTriends, getVideo } from './services.js';
import renderCards from './renderOtherCard.js'; 

const filmWeek = document.querySelector('.film-week');

const firstRender = (data, video) => {
   let {
        vote_average : voteAverage,
        backdrop_path : backdropPath,
        original_name : originalName,
        original_title : originalTitle,
        overview,
        name,
        title,
    } = data;

    

    filmWeek.innerHTML = `
    <div class="container film-week__container" data-rating="${voteAverage}">
        <div class="film-week__poster-wrapper">
            <img class="film-week__poster"  src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdropPath}" alt="постер ${name}">
            <p data-tooltip="${overview.replace(/"([^"]+)"/g, '\'$1\'')}" class="film-week__title_origin">${originalName || originalTitle}</p>
        </div>
        <h2 class="film-week__title">${name || title}</h2>
        ${video ?
        `<a class="film-week__watch-trailer tube" href="https://youtu.be/${video.key}" aria-label="смотреть трейлер"></a>`:
        ''}
    </div>`;
}

const renderVideo = async () => {
    const data = await getTriends('all', 'day', 1);
    const [firstCard, ...otherCards] = data.results;    

    const video = await getVideo(firstCard.id, firstCard.media_type)
    // video = video.results[0];
    firstRender(firstCard, video.results[0]);
    console.log(video);    
    otherCards.length = 18;
    console.log(otherCards[0]);
    

    renderCards(otherCards);
}



export default renderVideo;