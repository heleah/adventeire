import styled from 'styled-components';

import shamrock from '../images/clover.svg';
import shamrockGreen from '../images/clover_col.svg';
import infoButton from '../images/info.svg';

export default function SightCard({ sight, toggleFavorite, isFave }) {
  return (
    <CardWrapper>
      <img src={sight.imgUrl} alt={sight.name} />
      <InfoWrapper>
        <h4>{sight.name}</h4>
        <p>Co. {sight.county}</p>
      </InfoWrapper>
      <IconWrapper>
        <FaveShamrock
          src={isFave(sight) ? shamrockGreen : shamrock}
          alt='Fave Icon'
          onClick={() => toggleFavorite(sight)}
        />
        <InfoButton src={infoButton} alt='Info Icon' />
      </IconWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  margin: 0.8rem 0;
  border-radius: 20px;
  background-color: var(--grey-lightest-opa);
  padding: 1rem;

  img {
    width: 8rem;
    border-radius: 10px;
  }

  p {
    font-size: 1rem;
  }
`;

const InfoWrapper = styled.div``;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FaveShamrock = styled.img`
  height: 2.6rem;
`;

const InfoButton = styled.img`
  height: 2.2rem;
`;