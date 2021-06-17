```jsx
import MultiSelect from 'react-multi-select-component';
import { useState } from 'react';

const counties = [
  { label: 'Antrim (UK)', value: 'antrim (uk)' },
  { label: 'Clare', value: 'clare' },
  { label: 'Cork', value: 'cork' },
  { label: 'Dublin', value: 'dublin' },
];

const [selected, setSelected] = useState([]);

<Filter counties={counties} selected={selected} setSelected={setSelected} />;
```
