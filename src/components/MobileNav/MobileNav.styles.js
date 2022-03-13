import styled, { keyframes } from 'styled-components';

const moveMenu = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`;
export const Wrapper = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.sunflower};
  inset: 0;
  padding: 30px 40px;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    display: flex;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.greene};
    font-weight: 600;
    font-size: 40px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamilies.titleFont};
    padding: 8px 0;
    animation: ${moveMenu} 0.5s ease-in-out;
    animation-delay: ${props => console.log};
  }
`;

export const HamburgerWrapper = styled.div`
  display: none;
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    display: flex;
  }
`;

export const MenuWrapper = styled.div`
  display: none;
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    display: flex;
  }
`;
