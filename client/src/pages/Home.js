import { Link } from 'react-router-dom';
import styled from 'styled-components';

import shamrock from '../images/shamrock.svg';
import cliffsWhite from '../images/cliff_white.svg';

export default function Home() {
  return (
    <HomeWrapper>
      <h2>Home</h2>
      <Intro>
        FÁILTE and welcome to <span>adventéire</span>, your guide to the many
        miraculous sights of Ireland! <br /> Start on the following page by
        either browsing through all the sights or by filtering by county:
      </Intro>
      <ButtonWrapper>
        <LinkStyled to='/sights'>
          <Button>
            Start Exploring
            <img src={cliffsWhite} alt='Sights Icon' />
          </Button>
        </LinkStyled>
      </ButtonWrapper>
      <ShamrockImg src={shamrock} alt='Shamrock' />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: 80vh;
  border-radius: 20px;
  background-color: var(--grey-lightest-opa);

  @media (min-width: 768px) {
    padding-top: 10%;
  }
`;

const Intro = styled.p`
  margin: 0 1rem;

  span {
    font-style: italic;
    color: var(--primary-dark);
  }
`;

const ButtonWrapper = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 10px;
  background-color: var(--secondary);
  color: var(--grey-lightest);
  box-shadow: 0 0 0.4rem var(--grey-darkest);
  font-size: 1rem;
  cursor: pointer;

  img {
    height: 2rem;
  }
`;

const ShamrockImg = styled.img`
  margin: 3rem auto;
  height: 6rem;
  filter: drop-shadow(0 0 0.2rem black);
  animation: rotateShamrock360 4000ms linear infinite alternate;

  @keyframes rotateShamrock360 {
    0% {
      transform: rotate(0turn);
    }
    50% {
      transform: rotate(180deg) scale(1.2);
    }
    100% {
      transform: rotate(1turn);
    }
  }
`;
