import PropTypes, { object } from "prop-types";
import styled from "styled-components";

import Headline from "../components/Headline";
import SightCard from "../components/SightCard";

export default function Favorites({ faveSights, toggleFavorite, isFave }) {
  return (
    <>
      <Headline>Favourites</Headline>
      {faveSights.length === 0 ? (
        <ConditionalH4 style={{ textAlign: "center" }}>
          No favourites added yet ☘️
        </ConditionalH4>
      ) : (
        faveSights.map((sight) => {
          return (
            <SightCard
              key={sight._id}
              sight={sight}
              toggleFavorite={toggleFavorite}
              isFave={isFave}
            />
          );
        })
      )}
    </>
  );
}

Favorites.propTypes = {
  faveSights: PropTypes.arrayOf(object),
  toggleFavorite: PropTypes.func,
  isFave: PropTypes.func,
};

const ConditionalH4 = styled.h4`
  border-radius: 20px;
  margin: 0.8rem 0;
  padding: 0.5rem 1rem;
  background-color: var(--grey-lightest-opa);
`;
