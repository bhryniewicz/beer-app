import styled from 'styled-components';

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&family=Sansita+Swashed:wght@400;600&display=swap');
  background-color: green;
  height: ${({ isOneBackground }) => (isOneBackground ? '100vh' : '86vh')};
  padding: 40px 0;
  background-color: ${({ isColor }) => (isColor ? isColor : 'white')};
  position: relative;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
     height: max-content;
  }
  /* &::after {
    content: '';
    position: absolute;
    display: block;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    background-color: ${({ isColor }) => (isColor ? isColor : 'white')};
    transform: rotate(45deg);
    z-index: 300;
  } */
`;

export const WidthWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const DescriptionWrapper = styled.div`
  flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')};
  margin-top: 60px;
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamilies.normalFont};

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    flex-direction: column;
  }

  * {
    width: 50%;

    @media ${({ theme }) => theme.breakpoints.mobileL} {
      width: 100%;
    }
  }

  img {
    margin: 0;
  }
`;

export const Title = styled.h1`
  font-size: 38px;
  text-transform: uppercase;
  position: relative;
  display: block;
  width: fit-content;
  color: ${({ isReversed }) => (isReversed ? '#03544B' : '#03544B')};
  word-spacing: 7px;

  display: block;
  z-index: 100;
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    font-size: 28px;
  }

  &::before {
    content: '';
    width: 1000px;
    display: flex;
    align-self: center;
    height: 1.5px;
    background-color: ${({ isReversed }) => (isReversed ? '#03544B' : '#03544B')};
    top: 50%;
    left: 110%;
    transform: translateY(-50%);
    position: absolute;
    z-index: 2;
  }
`;

//

export const Paragraph = styled.p`
  padding: ${({ isReversed }) => (isReversed ? '0 0 0 50px' : '0 50px 0 0')};
  line-height: 170%;
  text-align: ${({ isReversed }) => (isReversed ? 'right' : 'left')};
  color: ${({ isReversed }) => (isReversed ? '#03544B' : '#03544B')};

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    padding: 0 0 30px;
    text-align: justify;
  }

  &::first-letter {
    font-family: ${({ theme }) => theme.fontFamilies.titleFont};
    font-size: 44px;
    font-weight: 100;
  }
`;

export const List = styled.ul`
  list-style: circle;
  color: red;
`;
