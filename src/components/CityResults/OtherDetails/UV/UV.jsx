import PropTypes from 'prop-types';

const UV = ({ uvValue }) => {
  return (
    <div className="Other__details__item Other__details__item--uv">
      <p className="item__head">UV index</p>
      <span className="item__value">{uvValue}</span>
    </div>
  );
};

UV.propTypes = {
  uvValue: PropTypes.number.isRequired,
};
export default UV;
