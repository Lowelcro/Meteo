import PropTypes from 'prop-types';

const Pressure = ({ pressureValue }) => {
  return (
    <div className="Other__details__item Other__details__item--press">
      <p className="item__head">Pressure</p>
      <span className="item__value">{pressureValue} hPa</span>
    </div>
  );
};

Pressure.propTypes = {
  pressureValue: PropTypes.number.isRequired,
};

export default Pressure;
