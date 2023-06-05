import PropTypes from 'prop-types';

export const Filter = ({ filter, onChangeInput }) => {
  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeInput}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};
