import PropTypes from 'prop-types';

import './OtherDetails.scss';

import UV from './UV/UV';
import Precipitations from './Precipitations/Precipitations';
import Humidity from './Humidity/Humidity';
import Pressure from './Pressure/Pressure';
import Visibility from './Visibility/Visibility';
import CloudCover from './CloudCover/CloudCover';

const OtherDetails = ({ conditionData }) => {
  return (
    <>
      <div className="Other__details">
        <UV uvValue={conditionData.uv} />
        <Precipitations precipValue={conditionData.precip_mm} />
        <Humidity humidValue={conditionData.humidity} />
      </div>

      <div className="Other__details">
        <Pressure pressureValue={conditionData.pressure_mb} />
        <Visibility visValue={conditionData.vis_km} />
        <CloudCover cloudValue={conditionData.cloud} />
      </div>
    </>
  );
};

OtherDetails.propTypes = {
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

export default OtherDetails;
