import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: ${({ isSearch }) => (isSearch ? '700px' : '300px')};
  padding: 15px 20px;
  border: 1.5px solid ${({ theme }) => theme.colors.greene};
  border-radius: 15px;
  outline: none;
  background-color: rgba(1, 33, 29, 0.3);
  color: white;
  font-weight: bold;
  align-self: center;
  margin: 0 0 70px 0;

  ::placeholder {
    text-align: center;
    color: white;
    opacity: 0.7;
    font-size: ${({ theme }) => theme.fontSizes.low};
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const Label = styled.label`
  text-align: center;
  color: ${({ theme }) => theme.colors.greene};
  font-family: ${({ theme }) => theme.fontFamilies.titleFont};
  padding: 0 0 20px 0;
  font-weight: bold;
  font-size: 24px;
`;
