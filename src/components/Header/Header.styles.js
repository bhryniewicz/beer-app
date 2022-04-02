import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 14vh;
  width: 100%;
  background-color: #fff;
  position: fixed;
  z-index: 400;
  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.1);

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    height: 8vh;
  }
`;

export const WidthWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    width: 50px;
    height: 50px;
  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    color: black;
    @media ${({ theme }) => theme.breakpoints.mobileL} {
      display: none;
    }
    a {
      text-transform: uppercase;
      position: relative;
      font-weight: 500;
      font-size: 14px;
      padding: 0 20px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.greene};
      font-weight: 600;

      &.active::before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 40px);
        height: 2px;
        background-color: #ffc312;
      }

      &.active.wish::before {
        display: none;
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 40px);
        height: 2px;
        background-color: #ffc312;
      }
    }
  }
`;

export const Counter = styled.span`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  top: -10px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.sunflower};
  border-radius: 50%;
  font-size: 12px;
`;
