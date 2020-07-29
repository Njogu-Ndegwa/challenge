import React, { useState, useEffect } from 'react';
import Loading from '../components/loading';
import Error from '../components/error';
import { fetchSeries } from "../API";
import dynamicSort from '../utils';
import Layout from '../components/layout';


export default function Movies() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      fetchSeries().then(result => result.sort(dynamicSort('title')))
        .then(result => result.slice(0, 21))
        .then(result => setData(result), setLoading(false))
        .catch(error => setError(true))

    };

    fetchData();
  }, []);


const contents = (
    <div className="container">
      <ul className='movies' >
        {data.map(item => (
          <li key={item.objectID}>
            <img src={item.images['Poster Art'].url} alt="series" />
            {item.title}
          </li>
        ))}
      </ul>
    </div> 
)

  return (
    <Layout content={contents} loading={loading} error={error} />
  )
}