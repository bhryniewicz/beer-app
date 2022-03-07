import React from 'react';
import {
  WidthWrapper,
  Title,
  Image,
  DescriptionWrapper,
  Paragraph,
  Wrapper
} from './Section.styles';
import { motion } from 'framer-motion';

export const Section = ({ isColor, isReversed, data: { title, description, image } }) => {
  return (
    <Wrapper isColor={isColor}>
      <WidthWrapper>
        <Title
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ ease: 'easeOut', duration: 1 }}
          isReversed={isReversed}
        >
          {title}
        </Title>
        <DescriptionWrapper isReversed={isReversed}>
          <Paragraph isReversed={isReversed}>{description}</Paragraph>
          <Image src={image} alt="" />
        </DescriptionWrapper>
      </WidthWrapper>
    </Wrapper>
  );
};
