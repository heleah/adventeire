import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import ireland from '../images/ireland.svg';
import cliffs from '../images/cliff.svg';
import shamrock from '../images/clover.svg';

export default function NavFooter() {
  return (
    <NavWrapper>
      <NavLink exact to='/'>
        <img src={ireland} alt='Home' />
      </NavLink>
      <NavLink to='/sights'>
        <img src={cliffs} alt='Sights' />
      </NavLink>
      <NavLink to='/favorites'>
        <img src={shamrock} alt='Favorites' />
      </NavLink>
    </NavWrapper>
  );
}

const NavWrapper = styled.footer`
  width: 94vw;
  background-color: var(--grey-lightest-opa);
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: calc((-94vw / 2));
  display: flex;
  justify-content: space-around;
  padding: 0.4rem;
  border-radius: 20px;

  img {
    height: 3rem;
  }
`;
