import PropTypes from 'prop-types';

const Humidity = ({ humidValue }) => {
  return (
    <div className="Other__details__item Other__details__item--humid">
      <p className="item__head">Humidity</p>
      <span className="item__value">{humidValue}%</span>
    </div>
  );
};

Humidity.propTypes = {
  humidValue: PropTypes.number.isRequired,
};
export default Humidity;
