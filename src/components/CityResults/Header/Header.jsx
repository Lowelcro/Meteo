import PropTypes from 'prop-types';

import './Header.scss';

const Header = ({ locationData, conditionData }) => {
  return (
    <div className="Results__header">
      <h2 className="Results__city">
        {locationData.name} <br />
        <span>
          {locationData.region} - {locationData.country}
        </span>
      </h2>
      <div className="Results__header__current">
        <img
          src={conditionData.condition.icon}
          alt={conditionData.condition.text}
        />
        <p>{conditionData.condition.text}</p>
      </div>
    </div>
  );
};

Header.propTypes = {
  locationData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  conditionData: PropTypes.shape({
    condition: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Header;
