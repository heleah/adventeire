import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import ireland from '../images/ireland.svg';
//import ireland_col from '../images/ireland_col.svg';
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
  width: ${(props) => (props.isStatic ? 'auto' : '94vw')};
  background-color: var(--grey-lightest-opa);
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  bottom: ${(props) => (props.isStatic ? 'auto' : 0)};
  left: ${(props) => (props.isStatic ? 'auto' : '50%')};
  margin-left: ${(props) => (props.isStatic ? 0 : 'calc((-94vw / 2))')};
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
