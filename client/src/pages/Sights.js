import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import Filter from '../components/Filter';
import SightCard from '../components/SightCard';

export default function Sights({ sights, toggleFavorite, isFave }) {
  const counties = [
    { label: 'Antrim (UK)', value: 'antrim (uk)' },
    { label: 'Clare', value: 'clare' },
    { label: 'Cork', value: 'cork' },
    { label: 'Dublin', value: 'dublin' },
  ];
  const [selected, setSelected] = useState(counties);
  const [selectedSights, setSelectedSights] = useState(sights);

  useEffect(() => {
    const filteredSights = sights.filter((sight) =>
      selected.find((county) => county.value === sight.county.toLowerCase())
    );
    setSelectedSights(filteredSights);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export const Headline = styled.h2`
  padding: 0.8rem 1rem;
  border-radius: 20px;
  background-color: var(--grey-lightest-opa);
`;
