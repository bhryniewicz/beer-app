import React from 'react';
import { WidthWrapper, Title, DescriptionWrapper, Paragraph, Wrapper } from './Section.styles';
import { AdvList } from 'components/List/List';
import { Image } from 'components/ImageSection/Image';

export const Section = ({ isColor, isReversed, isOneBackground, data: { title, description, image, figcaption = '' } }) => {
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
          <Image isOneBackground={isOneBackground} src={image} />
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
            <Image src={image} figcaption={figcaption} />
          </DescriptionWrapper>
        </WidthWrapper>
      </Wrapper>
    );
  }
};
