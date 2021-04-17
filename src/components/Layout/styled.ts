import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 30rem auto;
  grid-template-rows: 10rem auto;
  grid-template-areas:
    'AS MH'
    'AS CT';

  height: 100vh;

  @media (max-width: 1920px) {
    grid-template-columns: 18.17rem auto;
    grid-template-rows: 5rem auto;
  }

  @media (max-width: 770px) {
    grid-template-columns: 17rem auto;
    grid-template-rows: 5rem auto;
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 5rem auto;
    grid-template-areas:
      'MH'
      'CT';
  }
`
