
import React, { useState, use, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import Loading from '../components/loading';
import Error from '../components/error';
export default function Movies() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try{
      const result = await axios(
        'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
      ); 
     
      console.log('result', result)
      if (result.data) {
        let result1 = result.data.entries.map((data) => {
          if (data.releaseYear > 2010 && data.programType != 'series') {
            return data;
          }
        })
        result1 = result1.filter(item => item != undefined);
        result1.sort(dynamicSort("title"));
        result1 = result1.slice(0, 21)
        setData(result1);
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(true)
    }

    };

    fetchData();
  }, []);


  function dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      if (sortOrder == -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    }
  }

  return (
    <>
      <Header />
      {loading? <Loading/> : ''}
      {error? <Error/> : '' }
      <div className="container">
        <ul className='movies' >
          {data.map(item => (
            <li key={item.objectID}>
              <img src={item.images['Poster Art'].url} />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  )
}