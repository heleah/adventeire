import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Calendar from '../components/Calendar';
import { Button } from '../pages/Home';
import backButton from '../images/left_white.svg';
import addButton from '../images/plus.svg';
import wwwglobe from '../images/www.svg';

export default function DetailsView({
  showCalendar,
  onSetShowCalendar,
  toggleCalendar,
  onSetSelectDate,
  selectDate,
  dateSightCombos,
  setDateSightCombos,
  details,
}) {
  const [detailedSight, setDetailedSight] = useState(details ? details : {});

  let { sightId } = useParams();
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

  useEffect(() => {
    if (sightId) {
      fetch('/api/sights/' + sightId)
        .then((result) => result.json())
        .then((data) => setDetailedSight(data));
    }
  }, [sightId]);

  return (
    <DetailsWrapper>
      <h2>{detailedSight.name}</h2>
      <img src={detailedSight.imgUrl} alt={detailedSight.name} />
      {showCalendar && (
        <Calendar
          onSetShowCalendar={onSetShowCalendar}
          onSetSelectDate={onSetSelectDate}
          selectDate={selectDate}
          sight={detailedSight}
          dateSightCombos={dateSightCombos}
          setDateSightCombos={setDateSightCombos}
        />
      )}
      <p>{detailedSight.description}</p>
      <p>
        <span>Address:</span> {detailedSight.address}, Co.{' '}
        {detailedSight.county}
      </p>
      <p>
        <span>Ticket Required:</span> {detailedSight.ticket}
      </p>
      <WebsiteButton>
        <a href={detailedSight.website} target='_blank' rel='noreferrer'>
          Website
          <img src={wwwglobe} alt='Go to Website' />
        </a>
      </WebsiteButton>
      <ItineraryButton onClick={toggleCalendar}>
        Add to Itinerary
        <img src={addButton} alt='Add to Itinerary' />
      </ItineraryButton>
      <BackButton onClick={goToPreviousPath}>
        Back
        <img src={backButton} alt='Go Back' />
      </BackButton>
    </DetailsWrapper>
  );
}

DetailsView.propTypes = {
  showCalendar: PropTypes.bool,
  onSetShowCalendar: PropTypes.func,
  toggleCalendar: PropTypes.func,
  onSetSelectDate: PropTypes.func,
  dateSightCombos: PropTypes.array,
  setDateSightCombos: PropTypes.func,
  /** the details prop is only used for test and documentation purposes */
  details: PropTypes.object,
};

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 0.8rem 0;
  border-radius: 20px;
  background-color: var(--grey-lightest-opa);
  padding: 1rem;

  h2 {
    padding: 0;
    padding-bottom: 0.4rem;
  }

  img {
    border-radius: 10px;
    width: 20rem;
    margin: 0 auto;
  }

  span {
    font-weight: 600;
  }
`;

const WebsiteButton = styled(Button)`
  margin-top: 0.4rem;
  padding: 0.6rem;
  padding-right: 0.4rem;
  width: 8.4rem;
  background-color: var(--primary);

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--grey-darkest);
  }
`;

const ItineraryButton = styled(Button)`
  align-self: center;
  width: 8.4rem;
  background-color: var(--grey-light);
  color: var(--grey-darkest);
  gap: 0.5rem;
`;

const BackButton = styled(Button)`
  align-self: flex-end;
  width: 7rem;
  gap: 0.4rem;
`;
