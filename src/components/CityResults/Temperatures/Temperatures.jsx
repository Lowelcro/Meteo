import PropTypes from 'prop-types';

import './Temperatures.scss';
import { faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Temperatures = ({ conditionData }) => {
  const temperatureState = (temp_c) => {
    switch (true) {
      case temp_c > 32:
        return '--very-hot';
      case temp_c > 22:
        return '--hot';
      case temp_c > 12:
        return '--moderate';
      case temp_c > 5:
        return '--quite-cold';
      default:
        return '--cold';
    }
  };
  return (
    <div className="Results__temp">
      <div
        className={`thermometer thermometer${temperatureState(
          conditionData.temp_c
        )}`}
      >
        <FontAwesomeIcon icon={faTemperatureHalf} />
      </div>
      <div className="Results__temp__details">
        <h3 className="Results__temp__real">{conditionData.temp_c}°C</h3>
        Feelslike :{' '}
        <span className="Results__temp__feelslike">
          {conditionData.feelslike_c}°C
        </span>
      </div>
    </div>
  );
};

Temperatures.propTypes = {
  conditionData: PropTypes.shape({
    temp_c: PropTypes.number.isRequired,
    feelslike_c: PropTypes.number.isRequired,
  }).isRequired,
};

export default Temperatures;
