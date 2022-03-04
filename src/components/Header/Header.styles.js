import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 14vh;
  width: 100%;
  display: flex;
  padding: 0 80px 0;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
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
      font-weight: 500;
      font-size: 14px;
      padding: 0 20px;
      text-decoration: none;
      color: black;
    }
  }
`;
