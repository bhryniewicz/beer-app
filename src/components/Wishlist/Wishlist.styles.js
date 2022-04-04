import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 140px 0 calc(140px - 8vh);
  background-color: ${({ theme }) => theme.colors.sunflower};

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    padding: 90px 0 calc(90px - 8vh);
  }
`;

export const WidthWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    width: 100%;
    padding: 0 10px;
  }
`;
export const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-gap: 40px;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.greene};
  font-size: 38px;
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
  margin-bottom: 40px;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    font-size: 30px;
    text-align: center;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
`;

export const AbsoluteWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const ItemWrapperDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  background-color: red;
  border: 1px solid ${({ theme }) => theme.colors.greene};
  background-color: ${({ theme }) => theme.colors.greene};
  cursor: pointer;
`;

export const ItemsInfo = styled.h1`
  grid-column: 1/-1;
  text-align: center;
  opacity: 0.6;
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    grid-column: 1/2;
  }
`;
