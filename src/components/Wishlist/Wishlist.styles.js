import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 140px;
  background-color: ${({ theme }) => theme.colors.sunflower};
`;

export const WidthWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;
export const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-gap: 40px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.greene};
  font-size: 38px;
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
  margin-bottom: 40px;
`;

export const ItemWrapper = styled.div`
  display: flex;
`;

export const ItemWrapperDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  background-color: red;
  border: 1px solid ${({ theme }) => theme.colors.greene};
  background-color: ${({ theme }) => theme.colors.greene};
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
