import styled from 'styled-components';

import SightCard from '../components/SightCard';
import { Headline } from './Sights';

export default function Favorites({ faveSights, toggleFavorite, isFave }) {
  return (
    <FavoritesWrapper>
      <Headline>Favourites</Headline>
      {faveSights.map((sight) => {
        return (
          <SightCard
            sight={sight}
            toggleFavorite={toggleFavorite}
            isFave={isFave}
          />
        );
      })}
    </FavoritesWrapper>
  );
}

const FavoritesWrapper = styled.div``;
