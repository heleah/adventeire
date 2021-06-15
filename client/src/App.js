import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { saveToLocal, loadFromLocal } from './lib/localStorage';
import Header from './components/Header';
import NavFooter from './components/NavFooter';
import Home from './pages/Home';
import Sights from './pages/Sights';
import Favorites from './pages/Favorites';
import Filtering from './pages/Filtering';
import DetailsView from './components/DetailsView';

function App() {
  const [allSights, setAllSights] = useState([]);
  const [faveSights, setFaveSights] = useState(
    loadFromLocal('Favourite Sights') ?? []
  );

  useEffect(() => {
    fetch('/api/sights')
      .then((res) => res.json())
      .then((sights) => setAllSights(sights));
  }, []);

  useEffect(() => {
    saveToLocal('All Sights', allSights);
  }, [allSights]);

  useEffect(() => {
    saveToLocal('Favourite Sights', faveSights);
  }, [faveSights]);

  function toggleFavorite(sightToToggle) {
    isFave(sightToToggle)
      ? removeFromFaves(sightToToggle)
      : addToFaves(sightToToggle);
  }

  function isFave(sightInQuestion) {
    return faveSights.find((sight) => sight._id === sightInQuestion._id);
  }

  function removeFromFaves(sightToRemove) {
    const sightsToKeep = faveSights.filter(
      (sight) => sight._id !== sightToRemove._id
    );
    setFaveSights(sightsToKeep);
  }

  function addToFaves(clickedSight) {
    const faveSight = allSights.find((sight) => sight._id === clickedSight._id);
    setFaveSights([faveSight, ...faveSights]);
  }

  return (
    <div className='App'>
      <Header />
      <MainContainer>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/sights'>
            <Sights
              sights={allSights}
              toggleFavorite={toggleFavorite}
              isFave={isFave}
            />
          </Route>
          <Route path='/favorites'>
            <Favorites
              faveSights={faveSights}
              toggleFavorite={toggleFavorite}
              isFave={isFave}
            />
          </Route>
          <Route path='/filter'>
            <Filtering sights={allSights} />
          </Route>
          <Route path={'/sights/:sightId'}>
            <DetailsView />
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
