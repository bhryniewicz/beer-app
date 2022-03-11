import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.sunflower};
  padding: 140px 0 20px 0;
  height: 100vh;
`;
export const WidthWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.lightenColors.green};
  margin-bottom: ${({ isBigger }) => (isBigger ? '30px' : '0')};
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ isBigger, theme }) => (isBigger ? theme.fontSizes.small : theme.fontSizes.gigaSmall)};
  margin: 5px 0 30px;
`;

export const Button = styled.button`
  margin-top: 30px;
  outline: none;
  color: white;
  background-color: ${({ theme }) => theme.lightenColors.green};
  border: none;
  border-radius: 15px;
  padding: 15px 40px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const Heading = styled.p`
  padding: 5px 0;
  display: ${({ isBigger }) => (isBigger ? 'inline-block' : 'block')};
  padding-right: ${({ isBigger }) => (isBigger ? '15px' : '0')};
  font-weight: ${({ isBigger }) => (isBigger ? '600' : '400')};
  font-size: ${({ isBigger, theme }) => (isBigger ? theme.fontSizes.small : theme.fontSizes.gigaSmall)};
`;

export const Wrap = styled.div`
  transform: translateX(80%);
`;
