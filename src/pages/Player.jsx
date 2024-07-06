import React, { useEffect, useState } from 'react';
import './Player.css';
import{useNavigate, useParams} from'react-router-dom'

const Player = () => {

  const {id}=useParams();
  const navigate = useNavigate ();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGMxMDFlZWNmZWE1MDkzYjRkNzExY2QxZmY3NzE4NyIsIm5iZiI6MTcxOTU2NDkzMi4wODA5NTgsInN1YiI6IjY2N2U3ODNmOWVmNTc2M2JkOGRjZjg2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhUUHjfYWCiy1FEPaEQnNOgz_SfDyPRfarUXaSX7VnI'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='player'>
      <img src='../download (6).png' alt='' className='backarrow' onClick={()=>{navigate(-2)}}/>
      {apiData.key && (
        <iframe
          width='90%'
          height='90%'
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title='trailer'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      )}
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
