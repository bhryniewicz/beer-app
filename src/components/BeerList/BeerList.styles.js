import styled from 'styled-components';
import { Bars } from 'react-loader-spinner';

export const FlexWrapper = styled.div`
  width: 100%;
  padding: 140px 20px 60px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.sunflower};
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin-top: 20px;
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const WidthWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    width: 100%;
  }
`;

export const Loading = styled.h2`
  grid-column: ${({ isBiggerGrid }) => (isBiggerGrid ? '1/8' : '1/3')};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
  font-size: 40px;
  letter-spacing: 3px;

  svg {
    margin-left: 10px;
  }
`;
