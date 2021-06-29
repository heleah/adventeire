import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { ReactComponent as IrelandIcon } from '../images/ireland.svg';
import { ReactComponent as CliffsIcon } from '../images/cliff.svg';
import { ReactComponent as ShamrockIcon } from '../images/clover.svg';

export default function NavFooter({ isStatic }) {
  return (
    <NavWrapper isStatic={isStatic}>
      <NavLink to='/sights'>
        <CliffsIconStyled title='Sights' role='img' />
      </NavLink>
      <NavLink to='/favorites'>
        <ShamrockIconStyled title='Favorites' role='img' />
      </NavLink>
      <NavLink to='/itinerary'>
        <IrelandIconStyled title='Itinerary' role='img' />
      </NavLink>
    </NavWrapper>
  );
}

NavFooter.propTypes = {
  isStatic: PropTypes.bool,
};

const NavWrapper = styled.footer`
  width: ${(props) => (props.isStatic ? 'auto' : '94vw')};
  background-color: var(--grey-lightest-opa);
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  bottom: ${(props) => (props.isStatic ? 'auto' : 0)};
  left: ${(props) => (props.isStatic ? 'auto' : '50%')};
  margin-left: ${(props) => (props.isStatic ? 0 : 'calc((-94vw / 2))')};
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 0.5rem;
  border-radius: 8px 8px 10px 10px;
`;

const CliffsIconStyled = styled(CliffsIcon)`
  height: 2.8rem;
  width: 2.8rem;

  .active & circle,
  .active & path {
    fill: var(--primary-dark);
    stroke: var(--primary-dark);
  }
`;

const ShamrockIconStyled = styled(ShamrockIcon)`
  height: 2.8rem;
  width: 2.8rem;

  .active & path {
    fill: var(--primary-dark);
    stroke: var(--primary-dark);
  }
`;

const IrelandIconStyled = styled(IrelandIcon)`
  height: 2.8rem;
  width: 2.8rem;

  .active & circle,
  .active & path {
    fill: var(--primary-dark);
    stroke: var(--primary-dark);
  }
`;
