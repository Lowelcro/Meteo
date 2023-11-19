import PropTypes from 'prop-types';

import './CityResults.scss';
import Header from './Header/Header';
import Temperatures from './Temperatures/Temperatures';
import Wind from './Wind/Wind';

const CityResults = ({ locationData, conditionData }) => {
  return (
    <div className="Results">
      <Header conditionData={conditionData} locationData={locationData} />
      <div className="Results__details">
        <Temperatures conditionData={conditionData} />
        <Wind conditionData={conditionData} />
      </div>
      <h5 className="Results__last-up">
        Last update : {conditionData.last_updated}
      </h5>
    </div>
  );
};

CityResults.propTypes = {
  locationData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  conditionData: PropTypes.shape({
    temp_c: PropTypes.number.isRequired,
    feelslike_c: PropTypes.number.isRequired,
    uv: PropTypes.number.isRequired,
    wind_dir: PropTypes.string.isRequired,
    wind_degree: PropTypes.number.isRequired,
    wind_kph: PropTypes.number.isRequired,
    gust_kph: PropTypes.number.isRequired,
    last_updated: PropTypes.string.isRequired,
    condition: PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CityResults;
