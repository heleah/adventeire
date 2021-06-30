import { useState, useEffect } from 'react';
import PropTypes, { object } from 'prop-types';
import styled from 'styled-components/macro';

import Filter from '../components/Filter';
import SightCard from '../components/SightCard';

import searchGlass from '../images/search.svg';

export default function Sights({ sights, toggleFavorite, isFave }) {
  const [selected, setSelected] = useState([]);
  const [selectedSights, setSelectedSights] = useState(sights);
  const [counties, setCounties] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSelected(counties);
    const filteredSights = sights.filter((sight) =>
      sight.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSelectedSights(filteredSights);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    function getCountiesForFilter() {
      const allCounties = sights.map((sight) => sight.county);
      let uniqueCounties = [];
      const map = {};
      allCounties.forEach((county) => {
        if (!map[JSON.stringify(county)]) {
          map[JSON.stringify(county)] = true;
          uniqueCounties.push(county);
          uniqueCounties.sort();
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
    const sightsAlphabeticallyByCounty = filteredSights.sort((a, b) => {
      let nameA = a.county.toUpperCase();
      let nameB = b.county.toUpperCase();
      return nameA < nameB ? -1 : 1;
    });
    setSelectedSights(sightsAlphabeticallyByCounty);
  }, [sights, selected]);

  return (
    <>
      <Headline>
        Sights
        <SightSearchWrapper>
          <SightSearchBar
            type='text'
            placeholder='Search Sight...'
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            data-test-id='search-bar'
          />
          <SearchIcon src={searchGlass} alt='Search Sight' />
        </SightSearchWrapper>
      </Headline>
      <Filter
        sights={sights}
        selected={selected}
        setSelected={setSelected}
        counties={counties}
        setSearchValue={setSearchValue}
      />
      {selectedSights.map((sight) => {
        return (
          <SightCard
            key={sight._id}
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

const SightSearchWrapper = styled.div`
  display: inline-flex;
  float: right;
  gap: 0.5rem;
`;

const SightSearchBar = styled.input`
  width: 10rem;
  border: none;
  background: transparent;
  padding: 0.2rem;
  text-align: right;
  font-size: 1rem;
`;

const SearchIcon = styled.img`
  padding-right: 0;
  height: 1.5rem;
  opacity: 0.5;
`;
