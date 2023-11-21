import PropTypes from 'prop-types';

const CloudCover = ({ cloudValue }) => {
  return (
    <div className="Other__details__item Other__details__item--cloud">
      <p className="item__head">CloudCover</p>
      <span className="item__value">{cloudValue}%</span>
    </div>
  );
};

CloudCover.propTypes = {
  cloudValue: PropTypes.number.isRequired,
};

export default CloudCover;
