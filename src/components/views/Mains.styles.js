import styled from 'styled-components';
import { Background2 } from 'images';

export const LandingPageWrapper = styled.div`
  background-image: url(${Background2});
  background-size: cover;
  background-position: 30%;
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  width: 100%;
  height: 86vh;
  display: flex;
  margin-top: 14vh;
  justify-content: center;
  align-items: center;
  color: white;

  div {
    width: 70%;

    h1 {
      font-size: 40px;
      margin-bottom: 15px;
    }

    p {
      font-style: italic;
      font-size: 20px;
    }
  }

  button {
    margin-top: 20px;
    outline: none;
    color: white;
    background-color: #ffc312;
    border: none;
    border-radius: 15px;
    font-weight: 600;
    padding: 15px 40px;
    font-size: 16px;
    letter-spacing: 1px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
