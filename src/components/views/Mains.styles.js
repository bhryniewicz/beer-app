import styled from 'styled-components';
import { Background2 } from 'images';

export const LandingPageWrapper = styled.div`
  background-image: ${({ background }) => (background ? `url(${background})` : null)};
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

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    margin-top: 8vh;
    height: 92vh;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    margin-top: 10vh;
    height: 90vh;
  }

  div {
    width: 70%;

    h1 {
      font-size: 40px;
      margin-bottom: 15px;
      @media ${({ theme }) => theme.breakpoints.mobileL} {
        text-align: justify;
      }
    }

    p {
      font-style: italic;
      font-size: 20px;

      @media ${({ theme }) => theme.breakpoints.mobileL} {
        font-size: 14px;
      }
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

    @media ${({ theme }) => theme.breakpoints.mobileL} {
      width: 100%;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
