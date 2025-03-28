import styled from 'styled-components';

export const WrapperWallpaper = styled.section`
  width: 60vw;
  background-color: var(--medium-yellow);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  padding: 0 2.5rem;
  background-color: var(--white);
  border-radius: 1rem;
  width: 70vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 1025px) {
    width: 40vw;
    height: 100vh;
    border-radius: 0;
  }

  img {
    width: 70%;
  }
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.4rem;
`