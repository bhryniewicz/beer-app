import React from 'react';
import { WidthWrapper, Title, Image, DescriptionWrapper, Paragraph, Wrapper } from './Section.styles';

export const Section = ({ isColor, isReversed, isOneBackground, data: { title, description, image } }) => {
  if (isOneBackground) {
    return (
      <Wrapper>
        <WidthWrapper>
          <Title>{title}</Title>
          <Image src={image} isOneBackground={isOneBackground} />
        </WidthWrapper>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper isColor={isColor}>
        <WidthWrapper>
          <Title isReversed={isReversed}>{title}</Title>
          <DescriptionWrapper isReversed={isReversed}>
            <Paragraph isReversed={isReversed}>{description}</Paragraph>
            <Image src={image} alt="" />
          </DescriptionWrapper>
        </WidthWrapper>
      </Wrapper>
    );
  }
};
