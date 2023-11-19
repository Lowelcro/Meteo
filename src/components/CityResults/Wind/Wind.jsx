import PropTypes from 'prop-types';

import './Wind.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faWind } from '@fortawesome/free-solid-svg-icons';

const Wind = ({ conditionData }) => {
  return (
    <div className="Results__wind">
      <FontAwesomeIcon icon={faWind} />
      <div className="Results__wind__details">
        {' '}
        <h3 className="Results__wind__speed">
          {Math.round(conditionData.wind_kph)} km/h
        </h3>
        <span className="Results__wind__gust">
          {Math.round(conditionData.gust_kph)} km/h
        </span>
      </div>

      <div className="Results__wind__dir">
        <FontAwesomeIcon
          icon={faLocationArrow}
          transform={{ rotate: `${conditionData.wind_degree}` }}
        />
        <p className="Results__wind__dir__text">{conditionData.wind_dir}</p>
      </div>
    </div>
  );
};

Wind.propTypes = {
  conditionData: PropTypes.shape({
    wind_dir: PropTypes.string.isRequired,
    wind_degree: PropTypes.number.isRequired,
    wind_kph: PropTypes.number.isRequired,
    gust_kph: PropTypes.number.isRequired,
  }).isRequired,
};

export default Wind;
