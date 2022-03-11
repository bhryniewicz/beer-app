import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 150px;
  min-height: 100vh;
  padding-bottom: 80px;
`;

export const WidthWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
`;

export const BlogDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
export const BlogEntry = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.sunflower};
  margin-bottom: 80px;
`;

export const BlogTitle = styled.h1`
  color: ${({ theme }) => theme.colors.greene};
  padding: 20px;
  text-align: center;
  font-size: 48px;
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
`;

const showArrow = keyframes`
    from {
        opacity: 0;
        bottom: -30px;
    }

    to {
        opacity: 1;
        bottom: -60px;
    }
`;

export const BlogPara = styled.p`
  color: ${({ theme }) => theme.colors.black};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    border: solid ${({ theme }) => theme.colors.greene};
    border-width: 0 2px 2px 0;
    display: block;
    padding: 7px;
    transform: rotate(45deg) translateX(-50%);
    animation: ${showArrow} 1s infinite ease-in-out;
  }
`;
