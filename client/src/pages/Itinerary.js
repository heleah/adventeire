import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Headline } from './Sights';

import deleteIcon from '../images/delete.svg';
import infoIcon from '../images/info.svg';

export default function Itinerary({ dateSightCombos, setDateSightCombos }) {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    function getDatesForItinerary() {
      const allDates = dateSightCombos.map((combo) => combo.date);
      let uniqueDates = [];
      const map = {};
      allDates.forEach((date) => {
        if (!map[JSON.stringify(date)]) {
          map[JSON.stringify(date)] = true;
          uniqueDates.push(date);
          uniqueDates.sort((a, b) => {
            a = a.split('/');
            b = b.split('/');
            return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
          });
        }
      });
      return uniqueDates;
    }
    setDates(getDatesForItinerary());
  }, [dateSightCombos]);

  function removeFromItinerary(comboToRemove) {
    const remaining = dateSightCombos.filter(
      (combo) =>
        combo.sight._id !== comboToRemove.sight._id ||
        combo.date !== comboToRemove.date
    );
    setDateSightCombos(remaining);
  }

  return (
    <>
      <Headline>My Itinerary</Headline>
      <ItineraryWrapper>
        {dateSightCombos.length === 0 ? (
          <h4 style={{ textAlign: 'center' }}>No sights added yet ☘️</h4>
        ) : (
          dates.map((date) => {
            return (
              <DateSightWrapper key={date}>
                <h4>{date}</h4>
                {dateSightCombos
                  .filter((combo) => combo.date === date)
                  .map((combo) => (
                    <Sight key={combo.date + '+' + combo.sight._id}>
                      <p>{combo.sight.name}</p>
                      <IconWrapper>
                        <Link to={`/sights/${combo.sight._id}`}>
                          <img src={infoIcon} alt='See details' />
                        </Link>
                        <img
                          src={deleteIcon}
                          alt='Delete from itinerary'
                          onClick={() => removeFromItinerary(combo)}
                        />
                      </IconWrapper>
                    </Sight>
                  ))}
              </DateSightWrapper>
            );
          })
        )}
      </ItineraryWrapper>
    </>
  );
}

Itinerary.propTypes = {
  dateSightCombos: PropTypes.array,
  setDateSightCombos: PropTypes.func,
};

const ItineraryWrapper = styled.div`
  border-radius: 20px;
  margin: 0.8rem 0;
  padding: 0.5rem 1rem;
  background-color: var(--grey-lightest-opa);
`;

const DateSightWrapper = styled.article`
  margin: 1rem 0;

  h4 {
    color: var(--primary-darkest);
    letter-spacing: 0.06rem;
  }
`;

const Sight = styled.section`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  gap: 1.2rem;

  img {
    height: 1.8rem;
    cursor: pointer;
  }
`;
