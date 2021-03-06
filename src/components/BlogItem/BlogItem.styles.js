import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrap = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageBlog = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;

  &.smooth {
    transition: opacity 1s;
  }

  &.hidden {
    opacity: 0;
    width: 0;
  }

  &.visible {
    opacity: 1;
    width: 100%;
  }
`;

export const Description = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.sunflower};
  height: 200px;
  padding: 20px;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    height: 230px;
    width: auto;
  }
  @media ${({ theme }) => theme.breakpoints.mobileM} {
    width: 260px;
  }
  @media ${({ theme }) => theme.breakpoints.mobileM} {
    width: 220px;
  }
`;

const FirstLetter = css`
  ::first-letter {
    text-transform: uppercase;
  }
`;
export const Title = styled.h1`

  ${FirstLetter}
  color: ${({ theme }) => theme.colors.greene};
  font-size: 18px;
  padding-bottom: 15px;
  text-transform: lowercase;
`;

export const Paragraph = styled.p`
  ${FirstLetter}
  font-size: 14px;
  text-decoration: none;
  overflow-wrap: break-word;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 20px;
  margin-top: 20px;
  outline: none;
  background-color: ${({ theme }) => theme.lightenColors.green};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;

  a {
    color: white;
    text-decoration: none;
  }
`;
