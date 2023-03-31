import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { saveToLocal, loadFromLocal } from "./lib/localStorage";
import Header from "./components/Header";
import NavFooter from "./components/NavFooter";
import Home from "./pages/Home";
import Sights from "./pages/Sights";
import Favorites from "./pages/Favorites";
import DetailsView from "./components/DetailsView";
import Itinerary from "./pages/Itinerary";
import Map from "./components/Map";

function App() {
  const [allSights, setAllSights] = useState([]);
  const [faveSights, setFaveSights] = useState(
    loadFromLocal("Favourite Sights") ?? []
  );
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectDate, setSelectDate] = useState("28/6/2021");
  const [dateSightCombos, setDateSightCombos] = useState(
    loadFromLocal("Sights on Dates") ?? []
  );

  useEffect(() => {
    fetch("/api/sights")
      .then((res) => res.json())
      .then((sights) => {
        const sightsAlphabetically = sights.sort((a, b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          return nameA < nameB ? -1 : 1;
        });
        setAllSights(sightsAlphabetically);
      });
  }, []);

  useEffect(() => {
    saveToLocal("All Sights", allSights);
  }, [allSights]);

  useEffect(() => {
    saveToLocal("Favourite Sights", faveSights);
  }, [faveSights]);

  useEffect(() => {
    saveToLocal("Sights on Dates", dateSightCombos);
  }, [dateSightCombos]);

  function toggleFavorite(sightToToggle) {
    isFave(sightToToggle)
      ? removeFromFaves(sightToToggle)
      : addToFaves(sightToToggle);
  }

  function isFave(sightInQuestion) {
    return faveSights.find((sight) => sight._id === sightInQuestion._id);
  }

  function isOnItinerary(sightInQuestion) {
    return dateSightCombos.find(
      (combo) => combo.sight._id === sightInQuestion._id
    );
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

  function toggleCalendar() {
    setShowCalendar(!showCalendar);
  }

  return (
    <div className="App">
      <Header />
      <MainContainer>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sights">
            <Sights
              sights={allSights}
              toggleFavorite={toggleFavorite}
              isFave={isFave}
            />
          </Route>
          <Route path="/favorites">
            <Favorites
              faveSights={faveSights}
              toggleFavorite={toggleFavorite}
              isFave={isFave}
            />
          </Route>
          <Route path="/sights/:sightId">
            <DetailsView
              showCalendar={showCalendar}
              onSetShowCalendar={setShowCalendar}
              toggleCalendar={toggleCalendar}
              onSetSelectDate={setSelectDate}
              selectDate={selectDate}
              dateSightCombos={dateSightCombos}
              setDateSightCombos={setDateSightCombos}
            />
          </Route>
          <Route path="/itinerary">
            <Itinerary
              dateSightCombos={dateSightCombos}
              setDateSightCombos={setDateSightCombos}
            />
          </Route>
          <Route path="/map">
            <Map
              sights={allSights}
              isFave={isFave}
              isOnItinerary={isOnItinerary}
            />
          </Route>
        </Switch>
        <ToastContainerStyled />
      </MainContainer>
      <NavFooter />
    </div>
  );
}

export default App;

const MainContainer = styled.main`
  margin: 0 0.8rem;
  height: calc(100vh - 8rem);
  margin-bottom: 3.6rem;
  overflow-y: scroll;
`;

const ToastContainerStyled = styled(ToastContainer)`
  text-align: center;

  .Toastify__toast--success {
    background-color: var(--primary);
  }
`;
