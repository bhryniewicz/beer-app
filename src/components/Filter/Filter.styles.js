import styled from 'styled-components';

export const Input = styled.input`
  width: ${({ isSearch }) => (isSearch ? '500px' : '300px')};
  padding: 10px 20px;
  border: 1.5px solid white;
  border-radius: 15px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: bold;
  align-self: center;
  margin: 0 0 70px 0;

  ::placeholder {
    color: white;
    opacity: 0.7;
  }
`;

export const Label = styled.label`
  text-align: center;
  color: white;
  padding: 0 0 20px 0;
  font-weight: bold;
  font-size: 20px;
`;
