import styled from "styled-components/macro";
import PropTypes from "prop-types";

export default function Headline({ children }) {
  return <H2Styled>{children}</H2Styled>;
}

Headline.propTypes = {
  children: PropTypes.object,
};

const H2Styled = styled.h2`
  padding: 0.8rem 1rem;
  border-radius: 20px;
  background-color: var(--grey-lightest-opa);
`;
