import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';
import styled from 'styled-components';

export default function Header() {
  return (
    <Link to='/' exact='true'>
      <Image src={logo} alt='Logo' />
    </Link>
  );
}

const Image = styled.img`
  margin: 1rem auto;
  height: 1.6rem;
  filter: drop-shadow(0 0 0.2rem black);
`;
