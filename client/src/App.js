import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import NavFooter from './components/NavFooter';
import Home from './pages/Home';
import Sights from './pages/Sights';
import Favorites from './pages/Favorites';
import Filter from './components/Filter';

function App() {
  const [allSights, setAllSights] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/sights')
      .then((res) => res.json())
      .then((sights) => setAllSights(sights));
  });

  return (
    <div className='App'>
      <Header />
      <MainContainer>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sights'>
            <Sights sights={allSights} />
          </Route>
          <Route path='/favorites'>
            <Favorites />
          </Route>
          <Route path='/filter'>
            <Filter />
          </Route>
        </Switch>
      </MainContainer>
      <NavFooter />
    </div>
  );
}

export default App;

const MainContainer = styled.main`
  margin: 0 0.8rem;
`;
