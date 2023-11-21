import PropTypes from 'prop-types';

const Precipitations = ({ precipValue }) => {
  return (
    <div className="Other__details__item Other__details__item--precip">
      <p className="item__head">Precipitations</p>
      <span className="item__value">{precipValue}mm</span>
    </div>
  );
};

Precipitations.propTypes = {
  precipValue: PropTypes.number.isRequired,
};

export default Precipitations;
