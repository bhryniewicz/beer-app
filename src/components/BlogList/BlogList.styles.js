import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
