import { useState, useEffect } from 'react';
import PropTypes, { object } from 'prop-types';
import styled from 'styled-components/macro';

import Filter from '../components/Filter';
import SightCard from '../components/SightCard';

export default function Sights({ sights, toggleFavorite, isFave }) {
  const [selected, setSelected] = useState([]);
  const [selectedSights, setSelectedSights] = useState(sights);
  const [counties, setCounties] = useState([]);

  useEffect(() => {
    function getCountiesForFilter() {
      const allCounties = sights.map((sight) => sight.county);
      let uniqueCounties = [];
      const map = {};
      allCounties.forEach((county) => {
        if (!map[JSON.stringify(county)]) {
          map[JSON.stringify(county)] = true;
          uniqueCounties.push(county);
        }
      });
      const countiesAsFilterObjects = uniqueCounties.map((county) => ({
        label: county,
        value: county.toLowerCase(),
      }));
      return countiesAsFilterObjects;
    }
    setSelected(getCountiesForFilter());
    setCounties(getCountiesForFilter());
  }, [sights]);

  useEffect(() => {
    const filteredSights = sights.filter((sight) =>
      selected.find((county) => county.value === sight.county.toLowerCase())
    );
    setSelectedSights(filteredSights);
  }, [sights, selected]);

  return (
    <>
      <Headline>Sights</Headline>
      <Filter
        sights={sights}
        selected={selected}
        setSelected={setSelected}
        counties={counties}
      />
      {selectedSights.map((sight) => {
        return (
          <SightCard
            sight={sight}
            toggleFavorite={toggleFavorite}
            isFave={isFave}
          />
        );
      })}
    </>
  );
}

Sights.propTypes = {
  sights: PropTypes.arrayOf(object),
  toggleFavorite: PropTypes.func,
  isFave: PropTypes.func,
};

export const Headline = styled.h2`
  padding: 0.8rem 1rem;
  border-radius: 20px;
  background-color: var(--grey-lightest-opa);
`;
