import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.sunflower};
`;

export const WidthWrapper = styled.div`
  padding: 200px 0 60px;
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 1fr 25%;
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    display: flex;
    flex-direction: column;
    padding: 150px 0 60px;
  }
`;

export const BeerImage = styled.img`
  height: 60vh;
  width: 400px;
  object-fit: contain;
  transform: translateX(-60px) scale(1.3) rotate3d(2, 3, 4, 35deg);
  filter: drop-shadow(0 20px 1.5rem white);

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    padding-top: 50px;
    width: auto;
    transform: translateX(0) scale(1) rotate3d(0, 0, 0, 0deg);
  }
`;

export const BeerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  transform: ${({ isRight }) => (isRight ? 'translateY(80px)' : '0')};
`;

export const BeerKey = styled.h4`
  font-size: ${({ isName }) => (isName ? '40px' : '16px')};
  font-family: ${({ isName, theme }) =>
    isName ? theme.fontFamilies.titleFont : theme.fontFamilies.normalFont};
  text-transform: capitalize;
  transform: ${({ isName }) => (isName ? 'translateY(-100px)' : 'translateY(0)')};
  font-weight: 400;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    display: ${({ isName }) => (isName ? 'block' : 'inline')};
    transform: ${({ isName }) => (isName ? 'translateY(-60px)' : 'translateY(0)')};
  }
`;

export const BeerValue = styled.span`
  font-size: ${({ isName }) => (isName ? '50px' : '20px')};
  font-family: ${({ isName, theme }) =>
    isName ? theme.fontFamilies.titleFont : theme.fontFamilies.normalFont};
  padding-left: 10px;
  font-weight: ${({ isTip }) => (isTip ? '400' : '600')};
  color: ${({ theme }) => theme.lightenColors.green};

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    display: ${({ isName }) => (isName ? 'block' : 'inline')};
    padding-left: 0;
    font-size: ${({ isName }) => (isName ? '38px' : '')};
  }
`;

export const BeerWrap = styled.div`
  padding: 5px 0;
`;

export const BeerWrapDescription = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 80px 0 60px 0;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    width: 70%;
  }
`;

export const BeerTitle = styled.h2`
  color: ${({ theme }) => theme.lightenColors.green};
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
  font-size: 30px;
  margin: 20px 0 5px 0;
`;

export const BeerDescription = styled.p`
  font-size: 14px;
  line-height: 170%;
`;

export const BeerFoodList = styled.ul`
  padding-left: 20px;
  margin-top: 10px;

  li {
    font-size: 14px;
    padding: 5px 0 5px 5px;

    &::marker {
      content: '🍻';
    }
  }
`;
