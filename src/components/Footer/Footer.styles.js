import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #03544b;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    height: min-content;
  }
`;

export const WidthWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  padding-top: 65px;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-template-rows: 1fr 80px;
  place-items: start center;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
    grid-template-rows: repeat(4, 150px);
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListElement = styled.li`
  color: white;
  font-size: 12px;
  padding: 5px 0;

  &:first-child {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamilies.titleFont};

    @media ${({ theme }) => theme.breakpoints.mobileL} {
      margin: 10px 0;
    }
  }
`;

export const RightsReserved = styled.p`
  display: block;
  grid-column: 1/4;
  grid-row: 2/3;
  color: white;
  margin-top: 40px;
  font-size: 10px;
  align-self: flex-end;
  position: relative;
  z-index: 10;
  width: fit-content;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    grid-column: 1/2;
    grid-row: 4/5;
    align-self: center;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: -200%;
    width: 190%;
    height: 1px;
    background-color: #fff;
    z-index: -1;
    @media ${({ theme }) => theme.breakpoints.mobileL} {
      width: 40%;
      left: -50%;
    }
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 110%;
    width: 190%;
    height: 1px;
    background-color: #fff;
    z-index: -1;
    @media ${({ theme }) => theme.breakpoints.mobileL} {
      width: 40%;
    }
  }
`;
