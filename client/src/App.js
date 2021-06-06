import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';

function App() {
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((response) => setServerMessage(response));
  });

  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
