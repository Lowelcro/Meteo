import PropTypes from 'prop-types';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './CityResults.scss';

import Header from './Header/Header';
import Temperatures from './Temperatures/Temperatures';
import Wind from './Wind/Wind';
import OtherDetails from './OtherDetails/OtherDetails';

const CityResults = ({ locationData, conditionData }) => {
  const [displayDetails, setDisplayDetails] = useState(false);
  return (
    <div className="Results">
      <Header conditionData={conditionData} locationData={locationData} />
      <div className="Results__details">
        <Temperatures conditionData={conditionData} />
        <Wind conditionData={conditionData} />
      </div>
      {displayDetails && <OtherDetails conditionData={conditionData} />}
      <div className="Results__footer">
        {' '}
        <h5 className="Results__footer__last-up">
          Last update : {conditionData.last_updated}
        </h5>
        <button
          type="button"
          onClick={() => setDisplayDetails(!displayDetails)}
        >
          {!displayDetails && (
            <>
              <FontAwesomeIcon icon={faPlus} /> Detailed view
            </>
          )}
          {displayDetails && (
            <>
              <FontAwesomeIcon icon={faMinus} /> Simple view
            </>
          )}
        </button>
      </div>
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
    precip_mm: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    pressure_mb: PropTypes.number.isRequired,
    vis_km: PropTypes.number.isRequired,
    cloud: PropTypes.number.isRequired,
    last_updated: PropTypes.string.isRequired,
    condition: PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CityResults;
