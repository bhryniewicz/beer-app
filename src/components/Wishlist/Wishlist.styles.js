import styled, { keyframes } from 'styled-components';

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

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
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

export const AbsoluteWrapper = styled.div`
  display: flex;
  position: relative;
`;

const show = keyframes`
    from {
        width: 0;
        opacity: 0;
    }

    to {
        width: 60px;
        opacity: 1;
    }
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
