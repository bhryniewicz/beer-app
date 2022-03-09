import React from 'react';
import { WidthWrapper, Title, Image, DescriptionWrapper, Paragraph, Wrapper } from './Section.styles';
import { AdvList } from 'components/List/List';

export const Section = ({ isColor, isReversed, isOneBackground, data: { title, description, image } }) => {
  const advData = [
    'You can combine ::marker with the content property to change what the marker',
    'You can combine ::marker with the content property to change what the marker1',
    'You can combine ::marker with the content property to change what the marker2'
  ];
  if (isOneBackground) {
    return (
      <Wrapper isOneBackground={isOneBackground}>
        <WidthWrapper>
          <Title>{title}</Title>
          <Image src={image} isOneBackground={isOneBackground} />
          <AdvList advData={advData} />
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
