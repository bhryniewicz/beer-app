import styled from 'styled-components';

export const FlexWrapper = styled.div`
  max-width: 80vw;
  margin: 40px auto 0;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 30px 20px;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
`;
