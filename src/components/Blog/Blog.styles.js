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

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    width: 100%;
  }
`;
export const BlogEntry = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.sunflower};
  margin-bottom: 80px;
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    flex-direction: column-reverse;
    height: auto;
  }
`;

export const BlogTitle = styled.h1`
  color: ${({ theme }) => theme.colors.greene};
  padding: 20px;
  text-align: center;
  font-size: 48px;
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    font-size: 36px;
  }
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

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    font-size: 14px;
    padding-bottom: 30px;
    text-align: center;
  }

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

    @media ${({ theme }) => theme.breakpoints.mobileL} {
      border-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const LoadMore = styled.h1`
  width: fit-content;
  display: block;
  position: relative;
  text-align: center;
  padding: 30px 0 0 0;
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.greene};
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 6px;
    width: 100%;
    height: 2.5px;
    background-color: ${({ theme }) => theme.colors.greene};
  }
`;
