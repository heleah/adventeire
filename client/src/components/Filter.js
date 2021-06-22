import styled from 'styled-components';

import MultiSelect from 'react-multi-select-component';

export default function Filter({ selected, setSelected, counties }) {
  console.log(selected, 'selected');
  console.log(counties, 'Counties');
  return (
    <MultiSelectStyled
      options={counties}
      value={selected}
      onChange={setSelected}
      labelledBy='Select'
    />
  );
}

const MultiSelectStyled = styled(MultiSelect)`
  margin: 0.5rem auto;
  width: 90vw;
`;
