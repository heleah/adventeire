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
  /*   useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((response) => setServerMessage(response));
  }); */

  return (
    <div className='App'>
      <Header />
      <MainContainer>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sights'>
            <Sights />
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
  background-color: var(--grey-lightest-opa);
  height: 80vh;
  margin: 0 0.8rem;
  border-radius: 20px;
`;
