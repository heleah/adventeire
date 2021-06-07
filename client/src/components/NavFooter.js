import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import ireland from '../images/ireland.svg';
import ireland_col from '../images/ireland_col.svg';
import cliffs from '../images/cliff.svg';
import shamrock from '../images/clover.svg';

export default function NavFooter() {
  return (
    <NavWrapper>
      <NavLink exact to='/' activeClassName='selected'>
        <img src={ireland} alt='Home' />
      </NavLink>
      <NavLink to='/sights' activeClassName='selected'>
        <img src={cliffs} alt='Sights' />
      </NavLink>
      <NavLink to='/favorites' activeClassName='selected'>
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

  .selected {
    filter: drop-shadow(0 0 0.2rem var(--primary-darkest));
  }
`;
