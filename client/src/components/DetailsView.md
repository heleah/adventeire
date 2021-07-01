```jsx
import { useState } from 'react';
import { MemoryRouter as Router, useParams } from 'react-router-dom';

const details = {
  _id: '60c0bc5a4aad416f87855e91',
  name: "Giant's Causeway",
  address: 'Bushmills BT57 8SU',
  county: 'Antrim (UK)',
  ticket: 'yes',
  website: 'https://www.nationaltrust.org.uk/giants-causeway',
  imgUrl:
    'https://cdn.shopify.com/s/files/1/2717/4124/articles/Giant_footsteps_1_2048x.progressive.jpg?v=1543323286',
};

<Router>
  <DetailsView details={details} />
</Router>;
```
