import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.greene};
  position: relative;
`;

export const PositionWrapper = styled.div`
  position: absolute;
  right: 15%;
  top: 20%;
  cursor: pointer;
  z-index: 1000;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    top: 15.5%;
  }
`;
