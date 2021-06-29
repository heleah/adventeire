```jsx
import { useState } from 'react';

const [showCalendar, setShowCalendar] = useState(false);

<>
  <button onClick={() => setShowCalendar(!showCalendar)}>Show Calendar</button>

  {showCalendar && (
    <Calendar
      isCalendarOpen={showCalendar}
      onSetShowCalendar={() => setShowCalendar(!showCalendar)}
      onSetSelectDate={() => alert('Date selected!')}
      sight={{ name: 'not important' }}
    />
  )}
</>;
```
