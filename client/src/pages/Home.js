import { Link } from 'react-router-dom';
import styled from 'styled-components';

import shamrock from '../images/shamrock.svg';
import cliffsWhite from '../images/cliff_white.svg';
import filterWhite from '../images/selective_white.svg';

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
        <LinkStyled to='/sights'>
          <Button>
            See All
            <img src={cliffsWhite} alt='Sights Icon' />
          </Button>
        </LinkStyled>
        <Button>
          Filter
          <img src={filterWhite} alt='Filter Icon' />
        </Button>
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

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    height: 2rem;
  }
`;

const ShamrockImg = styled.img`
  margin: 3rem auto;
  height: 6rem;
  filter: drop-shadow(0 0 0.2rem black);
  transition: transform 1s ease-in-out;
`;
