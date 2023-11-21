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

  useEffect(() => {
    setApiKey(config.apiKey);
  }, []);

  const cityRequest = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputSeachCity}`
      )
      .then((response) => {
        console.log(response.data);
        setCityResultsLocation(response.data.location);
        setCityResultsCondition(response.data.current);
        setInputSearchCity('');
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div className="App">
      <AppHeader />
      <CitySearch
        value={inputSeachCity}
        handleChange={setInputSearchCity}
        handleSubmit={cityRequest}
      />
      {Object.keys(cityResultsCondition).length > 0 && (
        <CityResults
          locationData={cityResultsLocation}
          conditionData={cityResultsCondition}
        />
      )}
      <AppFooter />
    </div>
  );
}

export default App;
