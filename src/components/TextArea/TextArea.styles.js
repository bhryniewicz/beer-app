import styled from 'styled-components';

export const Wrapper = styled.textarea`
  width: 500px;
  height: 250px;
  padding: 10px 20px;
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
