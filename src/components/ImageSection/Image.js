import React from 'react';
import { FigImage, FigureImage, ImageHolder } from './Image.styles';

export const Image = ({ src, figcaption, isOneBackground }) => {
  return (
    <FigureImage>
      <ImageHolder src={src} alt="" isOneBackground={isOneBackground} />
      <FigImage>{figcaption}</FigImage>
    </FigureImage>
  );
};
