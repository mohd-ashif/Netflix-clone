import React from 'react'
import "./RowPost.css";
import {imageUrl ,API_KEY } from '../../constant/constants';
import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(props.url);
        console.log(response.data);
        setMovies(response.data.results);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [props.url]);

  const handleMovies = (id) => {
    console.log(id);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
   
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0].key); 
          // setUrlId(response.data.results[0].key); 
        }
      })
      .catch(error => {
        console.error('Error fetching movie videos:', error);
      });
  };
  
  const opts = {
    height: '360px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="posters">
            {movies.map((obj) => (
              <img
                key={obj.id}
                onClick={() => handleMovies(obj.id)}
                className={props.isSmall ? 'smallPoster' : 'poster'}
                src={`${imageUrl}${obj.backdrop_path}`}
                alt="poster"
              />
            ))}
          </div>
          {urlId && <YouTube videoId={urlId} opts={opts} />}
        </>
      )}
    </div>
  );
};

export default RowPost;