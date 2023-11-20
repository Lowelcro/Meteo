import { useState } from 'react';
import axios from 'axios';
import CitySearch from '../CitySearch/CitySearch';
import './App.scss';
import CityResults from '../CityResults/CityResults';

function App() {
  const [inputSeachCity, setInputSearchCity] = useState('');
  const [cityResultsLocation, setCityResultsLocation] = useState({});
  const [cityResultsCondition, setCityResultsCondition] = useState({});

  const cityRequest = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=a619da922ecc4a6c9fe140258231811&q=${inputSeachCity}`
      )
      .then((response) => {
        // console.log(response.data);
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
      <h1>Météo</h1>
      <CitySearch
        value={inputSeachCity}
        handleChange={setInputSearchCity}
        handleSubmit={cityRequest}
      />
      {Object.keys(cityResultsLocation).length > 0 &&
        Object.keys(cityResultsCondition).length > 0 && (
          <CityResults
            locationData={cityResultsLocation}
            conditionData={cityResultsCondition}
          />
        )}
    </div>
  );
}

export default App;
