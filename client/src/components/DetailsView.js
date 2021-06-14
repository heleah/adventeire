import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../pages/Home';
import backButton from '../images/left_white.svg';
import wwwglobe from '../images/www.svg';

export default function DetailsView() {
  const [detailedSight, setDetailedSight] = useState({});

  let { sightId } = useParams();
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

  useEffect(() => {
    fetch('http://localhost:4000/sights/' + sightId)
      .then((result) => result.json())
      .then((data) => setDetailedSight(data));
  }, [sightId]);

  return (
    <DetailsWrapper>
      <h2>{detailedSight.name}</h2>
      <img src={detailedSight.imgUrl} alt={detailedSight.name} />
      <p>
        <span>Address:</span> {detailedSight.address}, Co.{' '}
        {detailedSight.county}
      </p>
      <p>
        <span>Tickets (Adult):</span> € {detailedSight.price}
      </p>
      <WebsiteButton>
        <a href={detailedSight.website} target='_blank' rel='noreferrer'>
          Website
          <img src={wwwglobe} alt='Globe Icon' />
        </a>
      </WebsiteButton>
      <BackButton onClick={goToPreviousPath}>
        Back
        <img src={backButton} alt='Go Back Icon' />
      </BackButton>
    </DetailsWrapper>
  );
}

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
    text-decoration: underline;
  }
`;

const WebsiteButton = styled(Button)`
  margin-top: 0.4rem;
  padding: 0.6rem;
  padding-right: 0.4rem;
  width: 8.4rem;
  background-color: var(--primary-light);

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--grey-darkest);
  }
`;

const BackButton = styled(Button)`
  align-self: flex-end;
  width: 7rem;
  gap: 0.4rem;
`;
