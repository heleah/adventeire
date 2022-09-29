import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { ReactComponent as IrelandIcon } from '../assets/icons/ireland.svg';
import { ReactComponent as CliffsIcon } from '../assets/icons/cliff.svg';
import { ReactComponent as ShamrockIcon } from '../assets/icons/clover.svg';

export default function NavFooter({ isStatic }) {
  return (
    <NavWrapper isStatic={isStatic}>
      <NavLinkStyled to='/sights'>
        <CliffsIcon title='Sights' role='img' />
        <p>All Sights</p>
      </NavLinkStyled>
      <NavLinkStyled to='/favorites'>
        <ShamrockIcon title='Favorites' role='img' />
        <p>Favourites</p>
      </NavLinkStyled>
      <NavLinkStyled to='/itinerary'>
        <IrelandIcon title='Itinerary' role='img' />
        <p>Itinerary</p>
      </NavLinkStyled>
    </NavWrapper>
  );
}

NavFooter.propTypes = {
  isStatic: PropTypes.bool,
};

const NavWrapper = styled.footer`
  width: ${(props) => (props.isStatic ? '25rem' : '92vw')};
  background-color: var(--grey-lightest-opa);
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  bottom: 0;
  left: ${(props) => (props.isStatic ? 'auto' : '50%')};
  margin: ${(props) => (props.isStatic ? 'auto' : '0 auto')};
  margin-left: ${(props) => (props.isStatic ? '' : 'calc((-92vw / 2))')};
  display: inline-flex;
  box-shadow: 0 -0.4rem 0.8rem var(--grey-opa);
  justify-content: space-around;
  align-items: center;
  padding-top: 0.5rem;
  border-radius: 8px 8px 10px 10px;

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  .active,
  .active * {
    color: var(--primary-dark);
    svg {
      path,
      circle {
        fill: var(--primary-dark);
        stroke: var(--primary-dark);
      }

      .pin {
        fill: var(--tertiary);
        stroke: var(--tertiary);
      }
    }
  }

  @media (min-width: 500px) {
    width: 30rem;
    margin-left: ${(props) => (props.isStatic ? 'auto' : '-15rem')};
  }
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  p {
    font-size: 1rem;
    color: var(--grey-darkest);
  }
`;
