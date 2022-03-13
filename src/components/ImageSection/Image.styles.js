import styled from 'styled-components';

export const FigureImage = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({ height }) => (height ? '50%' : '')};

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    width: 100%;
  }
`;

export const ImageHolder = styled.img`
  object-fit: cover;
  height: ${({ height }) => (height ? '100%' : '350px')};
  margin-top: ${({ height }) => (height ? '0' : '60px')};
  width: 100%;
`;

export const FigImage = styled.figcaption`
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
  width: 100%;
  font-style: italic;
  padding-top: ${({ height }) => (height ? '0' : '10px')};
  font-size: 14px;
  text-align: center;
`;
