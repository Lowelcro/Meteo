import { useEffect, useState } from 'react';
import axios from 'axios';
import CitySearch from '../CitySearch/CitySearch';
import './App.scss';
import CityResults from '../CityResults/CityResults';

import config from '../../utils/config';
import AppFooter from '../AppFooter/AppFooter';
import AppHeader from '../AppHeader/AppHeader';

function App() {
  const [inputSeachCity, setInputSearchCity] = useState('');
  const [cityResultsLocation, setCityResultsLocation] = useState({});
  const [cityResultsCondition, setCityResultsCondition] = useState({});
  const [apiKey, setApiKey] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setApiKey(config.apiKey);
  }, []);

  const cityRequest = async () => {
    setErrorMessage('');
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputSeachCity}`
      );
      setCityResultsLocation(response.data.location);
      setCityResultsCondition(response.data.current);
      setInputSearchCity('');
    } catch (error) {
      if (error.code === 'ERR_BAD_REQUEST') {
        setErrorMessage('No result found');
      }
    }
  };

  return (
    <div className="App">
      <AppHeader />
      <CitySearch
        value={inputSeachCity}
        handleChange={setInputSearchCity}
        handleSubmit={cityRequest}
      />
      {Object.keys(cityResultsCondition).length > 0 && errorMessage === '' ? (
        <CityResults
          locationData={cityResultsLocation}
          conditionData={cityResultsCondition}
        />
      ) : (
        <p>{errorMessage}</p>
      )}
      <AppFooter />
    </div>
  );
}

export default App;
