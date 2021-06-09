import styled from 'styled-components/macro';

import SightCard from '../components/SightCard';

export default function Sights({ sights }) {
  return (
    <SightsWrapper>
      <Headline>All Sights</Headline>
      {sights.map((sight) => {
        return <SightCard sight={sight} />;
      })}
    </SightsWrapper>
  );
}

const SightsWrapper = styled.div``;

export const Headline = styled.h2`
  border-radius: 20px;
  background-color: var(--grey-lightest-opa);
`;
