import styled from 'styled-components';

export const FigureImage = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageHolder = styled.img`
  object-fit: cover;
  max-height: 350px;
  margin-top: 60px;
  width: 100%;
  object-position: ${({ isOneBackground }) => console.log(isOneBackground)};
`;

export const FigImage = styled.figcaption`
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
  width: 100%;
  font-style: italic;
  padding-top: 10px;
  font-size: 14px;
  text-align: center;
`;
