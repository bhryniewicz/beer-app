import React from 'react';
import { FigImage, FigureImage, ImageHolder } from './Image.styles';

export const Image = ({ src, figcaption, isOneBackground, height }) => {
  return (
    <FigureImage height={height}>
      <ImageHolder src={src} alt="" isOneBackground={isOneBackground} height={height} />
      <FigImage height={height}>{figcaption}</FigImage>
    </FigureImage>
  );
};
