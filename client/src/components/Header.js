import logo from '../images/logo.svg';
import styled from 'styled-components';

export default function Header() {
  return <Image src={logo} alt='Logo' />;
}

const Image = styled.img`
  margin: 1rem auto;
  height: 1.6rem;
`;
