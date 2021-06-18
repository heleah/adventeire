```jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const [detailedSight, setDetailedSight] = useState({
  _id: '60c0bc5a4aad416f87855e91',
  name: "Giant's Causeway",
  address: 'Bushmills BT57 8SU',
  county: 'Antrim (UK)',
  price: 15,
  website: 'https://www.nationaltrust.org.uk/giants-causeway',
  imgUrl:
    'https://cdn.shopify.com/s/files/1/2717/4124/articles/Giant_footsteps_1_2048x.progressive.jpg?v=1543323286',
});

//let { sightId } = '60c0bc5a4aad416f87855e91';
let { sightId } = useParams('60c0bc5a4aad416f87855e91');

<DetailsView />;
```
