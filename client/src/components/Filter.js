import styled from 'styled-components';
import PropTypes, { object } from 'prop-types';

import MultiSelect from 'react-multi-select-component';

export default function Filter({ selected, setSelected, counties }) {
  return (
    <MultiSelectStyled
      options={counties}
      value={selected}
      onChange={setSelected}
      labelledBy='Select'
    />
  );
}

Filter.propTypes = {
  selected: PropTypes.arrayOf(object),
  setSelected: PropTypes.func,
  counties: PropTypes.arrayOf(object),
};

const MultiSelectStyled = styled(MultiSelect)`
  margin: 0.5rem auto;
  width: 90vw;
`;
