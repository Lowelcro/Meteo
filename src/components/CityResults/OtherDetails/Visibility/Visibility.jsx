import PropTypes from 'prop-types';

const Visibility = ({ visValue }) => {
  return (
    <div className="Other__details__item Other__details__item--vis">
      <p className="item__head">Visibility</p>
      <span className="item__value">{visValue} km</span>
    </div>
  );
};

Visibility.propTypes = {
  visValue: PropTypes.number.isRequired,
};

export default Visibility;
