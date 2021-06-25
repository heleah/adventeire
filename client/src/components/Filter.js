import styled from 'styled-components';
import PropTypes, { object } from 'prop-types';

import MultiSelect from 'react-multi-select-component';

export default function Filter({
  selected,
  setSelected,
  counties,
  setSearchValue,
}) {
  function handleFilterChange(e) {
    setSearchValue('');
    setSelected(e);
  }

  return (
    <MultiSelectStyled
      options={counties}
      value={selected}
      onChange={handleFilterChange}
      labelledBy='Select'
    />
  );
}

Filter.propTypes = {
  selected: PropTypes.arrayOf(object),
  setSelected: PropTypes.func,
  counties: PropTypes.arrayOf(object),
  setSearchValue: PropTypes.func,
};

const MultiSelectStyled = styled(MultiSelect)`
  margin: 0.5rem auto;
  width: 90vw;
`;
