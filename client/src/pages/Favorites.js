import PropTypes, { object } from 'prop-types';

import SightCard from '../components/SightCard';
import { Headline } from './Sights';

export default function Favorites({ faveSights, toggleFavorite, isFave }) {
  return (
    <>
      <Headline>Favourites</Headline>
      {faveSights.map((sight) => {
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

Favorites.propTypes = {
  faveSights: PropTypes.arrayOf(object),
  toggleFavorite: PropTypes.func,
  isFave: PropTypes.func,
};
