import styled from 'styled-components';

export const List = styled.ul`
  margin: 30px 0 0 25px;
`;

export const ListElement = styled.li`
  color: ${({ theme }) => theme.colors.greene};
  padding: 15px 0 15px 10px;
  font-weight: 400;

  &::marker {
    content: '🍺 ';
  }
`;
