
import React, { useState, useEffect } from 'react';
import Loading from '../components/loading';
import Error from '../components/error';
import { fetchMovies } from "../API";
import dynamicSort from '../utils';
import Layout from '../components/layout';


export default function Movies() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      fetchMovies().then(result => result.sort(dynamicSort('title')))
        .then(result => result.slice(0, 21))
        .then(result => setData(result), setLoading(false), setError(false))
        .catch(error => setError(true))

    };

    fetchData();
  }, []);

  console.log(error)
  console.log(loading)

const contents = (
    <div className="container">
      <ul className='movies' >
        {data.map(item => (
          <li key={item.objectID}>
            <img src={item.images['Poster Art'].url} alt="movie"  />
            {item.title}
          </li>
        ))}
      </ul>
    </div> 
)

  return (
    <Layout content={contents} loading={loading} error={error}  />
  )
}