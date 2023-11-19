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
        }
      }}
    >
      <input
        type="text"
        className="form__input"
        placeholder="Recherchez une ville (en précisant son pays si besoin)"
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
