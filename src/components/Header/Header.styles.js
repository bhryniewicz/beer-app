import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 14vh;
  width: 100%;
  display: flex;
  padding: 0 80px 0;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  position: fixed;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;
    color: black;
    a {
      text-transform: uppercase;
      position: relative;
      font-weight: 500;
      font-size: 14px;
      padding: 0 20px;
      text-decoration: none;
      color: black;

      &.active::before {
        content: '';
        position: absolute;
        bottom: -7px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 40px);
        height: 2px;
        background-color: #ffc312;
      }
    }
  }
`;
