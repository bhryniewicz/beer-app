import React from 'react';
import { List, ListElement } from './List.styles';

export const AdvList = ({ advData }) => {
  console.log(advData);
  return (
    <List>
      {advData.map(adv => {
        return <ListElement>{adv}</ListElement>;
      })}
    </List>
  );
};
