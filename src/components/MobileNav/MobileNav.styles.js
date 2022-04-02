import styled, { keyframes } from 'styled-components';

const moveMenu = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
        display: block;
    }
`;

function template(i) {
  return `
          &:nth-child(${i + 1}) {
            animation-delay: ${(i - 1) * 0.3}s;
           }
        `;
}
function getAnimations() {
  let str = '';
  for (let index = 0; index < 6; index += 1) {
    str += template(index);
  }
  return str;
}

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
    animation: ${moveMenu} 0.5s ease-in-out both;

    ${getAnimations()}
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
