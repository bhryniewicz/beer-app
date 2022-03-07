import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Sansita+Swashed:wght@400;600&display=swap');
  background-color: green;
  height: 86vh;
  padding: 40px 0;
  background-color: ${({ isColor }) => (isColor ? isColor : 'white')};
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
  margin-top: 80px;
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamilies.normalFont};
  * {
    width: 50%;
  }
`;

export const Title = styled(motion.h1)`
  font-size: 38px;
  text-transform: uppercase;
  position: relative;
  display: block;
  width: fit-content;
  color: ${({ isReversed }) => (isReversed ? 'white' : 'black')};

  display: block;
  z-index: 100;
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};

  &::before {
    content: '';
    width: 1000px;
    display: flex;
    align-self: center;
    height: 1.5px;
    background-color: ${({ isReversed }) => (isReversed ? 'white' : 'black')};
    top: 50%;
    left: 110%;
    transform: translateY(-50%);
    position: absolute;
    z-index: 2;
  }
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const Paragraph = styled.p`
  padding: ${({ isReversed }) => (isReversed ? '0 0 0 50px' : '0 50px 0 0')};
  line-height: 170%;
  text-align: ${({ isReversed }) => (isReversed ? 'right' : 'left')};
  color: ${({ isReversed }) => (isReversed ? 'white' : 'black')};
`;
