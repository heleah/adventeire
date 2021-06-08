import { Link } from 'react-router-dom';
import styled from 'styled-components';

import shamrock from '../images/shamrock.svg';

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <Intro>
        FÁILTE and welcome to <span>adventéire</span>, your guide to the many
        miraculous sights of Ireland! <br /> Start by either browsing through
        all the sights or by filtering by county:
      </Intro>
      <ButtonWrapper>
        <Link to='/sights'>
          <button>See All Sights</button>
        </Link>
        <button>Filter Sights</button>
      </ButtonWrapper>
      <ShamrockImg src={shamrock} alt='Shamrock' />
    </>
  );
}

const Intro = styled.p`
  span {
    font-style: italic;
    color: var(--primary-dark);
  }
`;

const ShamrockImg = styled.img`
  margin: 3rem auto;
  height: 6rem;
  filter: drop-shadow(0 0 0.2rem black);
  transition: transform 1s ease-in-out;

  &:hover {
    transform: rotate(360);
  }
`;

const ButtonWrapper = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;

  button {
    padding: 0.8rem 1rem;
    border: none;
    border-radius: 10px;
    background-color: var(--secondary);
    color: var(--grey-lightest);
    box-shadow: 0 0 0.4rem var(--grey-darkest);
    font-size: 1rem;
  }
`;
