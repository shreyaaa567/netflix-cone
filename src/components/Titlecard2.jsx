import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const Titlecard2 = () => {
  const [apiData2, setApiData2] = useState([]);
  const [canScrollLeft2, setCanScrollLeft2] = useState(false);
  const [canScrollRight2, setCanScrollRight2] = useState(true);

  const checkScrollPosition2 = () => {
    const element = document.getElementById('card-list2');
    setCanScrollLeft2(element.scrollLeft > 0);
    setCanScrollRight2(element.scrollWidth > element.clientWidth + element.scrollLeft);
  };

  const scrollLeft2 = () => {
    const element = document.getElementById('card-list2');
    element.scrollBy({
      left: -250,
      behavior: 'smooth'
    });
  };

  const scrollRight2 = () => {
    const element = document.getElementById('card-list2');
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
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setApiData2(response.results))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const element = document.getElementById('card-list2');
    if (element) {
      element.addEventListener('scroll', checkScrollPosition2);
      checkScrollPosition2();

      return () => {
        element.removeEventListener('scroll', checkScrollPosition2);
      };
    }
  }, [apiData2]);

  return (
    <div className='titlecard2'>
      <h2>Trending Today</h2>
      <button
        className={`scroll-arrow left2 ${!canScrollLeft2 ? 'disabled2' : ''}`}
        onClick={scrollLeft2}
        disabled={!canScrollLeft2}
      >
        &#10094;
      </button>
      <div className='card-list2' id='card-list2'>
        {apiData2.map((card, index) => (
          <Link to={`/player/${card.id}`} className='card2' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
      <button
        className={`scroll-arrow right2 ${!canScrollRight2 ? 'disabled2' : ''}`}
        onClick={scrollRight2}
        disabled={!canScrollRight2}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Titlecard2;
