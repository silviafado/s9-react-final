import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import youtube from '../apis/youtube';
import unsplash from '../apis/unsplash';

const useResults = (defaultSearchTerm) => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  let widget = location.pathname;
  console.log(widget);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    if (widget === 'videos') {
      const response = await youtube.get('/search', {
        params: {
          q: term,
        },
      });
      setResults(response.data.items);
    } else if (widget === 'photos') {
      const response = await unsplash.get('/search/photos', {
        params: { query: term }
      });
      setResults(response.data.results)
    } else if (widget === 'art') {
      const response = await unsplash.get('/search/photos', {
        params: { query: 'art ' + term }
      });
      setResults(response.data.results);
    }
  };
  return [results, search, widget];
};

export default useResults;