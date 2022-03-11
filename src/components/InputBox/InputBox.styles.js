import styled from 'styled-components';

export const Input = styled.input`
  flex: 1;
  padding: 10px 20px;
  height: 45px;
  //border na dole z bialym
  /* border: none;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.white}; */
  border: 1.5px solid ${({ theme }) => theme.colors.greene};
  border-radius: 15px;
  outline: none;
  background-color: rgba(1, 33, 29, 0.25);
  color: white;

  ::placeholder {
    color: white;
    font-size: ${({ theme }) => theme.fontSizes.small};
    z-index: 10;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
