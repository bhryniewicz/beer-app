import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  grid-template-rows: 40px 100px 20px;
  border: 1px solid ${({ theme }) => theme.colors.greene};
  padding: 30px;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    grid-template-columns: 1fr 80px;
    padding: 20px;
  }


`;

export const WrapperDetails = styled.div`
  display: flex;
  grid-row: 3/4;
  color: ${({ theme }) => theme.colors.greene};
  * {
    text-decoration: none;
  }
  p {
    font-size: 12px;
    padding: 0 20px 0 0;
    position: relative;

    span {
      font-weight: 600;
      font-size: 14px;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-55%);
      width: 1px;
      height: 60%;
      background-color: ${({ theme }) => theme.colors.greene};
    }

    &:last-child::after {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.greene};
  font-size: 16px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.greene};
  font-size: 14px;
`;

export const Image = styled.img`
  width: 150px;
  height: 160px;
  object-fit: contain;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    width: 90px;
  }
`;
