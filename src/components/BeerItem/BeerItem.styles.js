import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  grid-template-rows: 40px 100px 20px;
  border: 1px solid white;
  padding: 30px;
  width: 70%;
`;

export const WrapperDetails = styled.div`
  display: flex;
  grid-row: 3/4;
  color: white;
  p {
    font-size: 12px;
    padding: 0 15px 0 0;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 16px;
`;

export const Description = styled.p`
  color: white;
  font-size: 14px;
`;

export const Image = styled.img`
  width: 150px;
  height: 160px;
  object-fit: contain;
`;
