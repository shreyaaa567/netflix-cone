import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const Titlecard = () => {
  const [apiData, setApiData] = useState([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    const element = document.getElementById('card-list');
    setCanScrollLeft(element.scrollLeft > 0);
    setCanScrollRight(element.scrollWidth > element.clientWidth + element.scrollLeft);
  };

  const scrollLeft = () => {
    const element = document.getElementById('card-list');
    element.scrollBy({
      left: -250,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    const element = document.getElementById('card-list');
    element.scrollBy({
      left: 250, 
      behavior: 'smooth'
    });
  };

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGMxMDFlZWNmZWE1MDkzYjRkNzExY2QxZmY3NzE4NyIsIm5iZiI6MTcxOTU2NDkzMi4wODA5NTgsInN1YiI6IjY2N2U3ODNmOWVmNTc2M2JkOGRjZjg2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhUUHjfYWCiy1FEPaEQnNOgz_SfDyPRfarUXaSX7VnI'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const element = document.getElementById('card-list');
    if (element) {
      element.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); 

      return () => {
        element.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, [apiData]);

  return (
    <div className='titlecard'>
      <h2>Popular on Netflix</h2>
      <button 
        className={`scroll-arrow left ${!canScrollLeft ? 'disabled' : ''}`} 
        onClick={scrollLeft}
        disabled={!canScrollLeft}
      >
        &#10094;
      </button>
      <div className='card-list' id='card-list'>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
      <button 
        className={`scroll-arrow right ${!canScrollRight ? 'disabled' : ''}`} 
        onClick={scrollRight}
        disabled={!canScrollRight}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Titlecard;
