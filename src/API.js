
import Axios from "axios";

export const fetchMovies = async () => {
    const endpoint = `https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json`;

    const result = await Axios.get(endpoint);

    const filter =  async () => {
       return result.data.entries.map((movie) => {
            if (movie.releaseYear > 2010 && movie.programType !== 'series') {
               return movie;
            }
            
        });
    }

  return  filter().then(result => result.filter(item => item !== undefined));

} 

export const fetchSeries = async () => {
  const endpoint = `https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json`;

  const result = await Axios.get(endpoint);

  const filter =  async () => {
     return result.data.entries.map((series) => {
          if (series.releaseYear > 2010 && series.programType !== 'movie') {
             return series;
          }
         
      });
  }

return  filter().then(result => result.filter(item => item !== undefined));

} 