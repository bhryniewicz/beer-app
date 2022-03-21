import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 100px;
  /* background-color: red; */
  overflow: hidden;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.greene};
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
  font-size: 38px;
  text-transform: uppercase;
  margin-bottom: 40px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    left: 46%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.greene};
  }
`;
