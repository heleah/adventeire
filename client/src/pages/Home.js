import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <p>
        Welcome to adventéire, your guide to the miraculous sights of Ireland!
      </p>
      <ButtonWrapper>
        <button>See All Sights</button>
        <button>Filter Sights</button>
      </ButtonWrapper>
    </>
  );
}

const ButtonWrapper = styled.section`
  margin-top: 1rem;
  display: flex;
  justify-content: space-evenly;

  button {
    padding: 0.6rem 0.8rem;
    border: none;
    border-radius: 10px;
    background-color: #c7600e;
    color: var(--grey-lightest);
    box-shadow: 0 0 0.4rem var(--grey-darkest);
  }
`;
