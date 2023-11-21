import PropTypes from 'prop-types';
import './CitySearch.scss';

const CitySearch = ({ value, handleChange, handleSubmit }) => {
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        if (value) {
          handleSubmit(value);
          document.activeElement.blur();
        }
      }}
    >
      <input
        type="text"
        className="form__input"
        placeholder="Search for a city (specifying its country if necessary)"
        value={value}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
    </form>
  );
};

CitySearch.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CitySearch;
