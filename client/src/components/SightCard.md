```jsx
import { useState } from 'react';

const [sight, setSight] = useState({
  name: 'Cliffs of Moher',
  county: 'Clare',
  imgUrl:
    'https://lh5.googleusercontent.com/p/AF1QipO1yJ6Mnu30SqAt69GxC4t3sMfestLPlS4i11_9=w408-h272-k-no',
});

<SightCard
  sight={sight}
  isFave={(sight) => false}
  toggleFavorite={() => alert('Added to Favorites!')}
/>;
```
