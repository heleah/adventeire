import { useState } from 'react';
import MultiSelect from 'react-multi-select-component';

export default function Filter({ sights }) {
  const [selected, setSelected] = useState(sights);

  const counties = [
    { label: 'Antrim', value: 'antrim' },
    { label: 'Clare', value: 'clare' },
    { label: 'Cork', value: 'cork' },
    { label: 'Dublin', value: 'dublin' },
  ];

  function filterOptions(options, filter) {
    if (!filter) {
      return options;
    }
    const re = new RegExp(filter, 'i');
    return options.filter(({ value }) => value && value.match(re));
  }

  return (
    <>
      <pre>{JSON.stringify}</pre>
      <MultiSelect
        options={counties}
        value={selected}
        onChange={setSelected}
        labelledBy='Select County'
      />
    </>
  );
}
