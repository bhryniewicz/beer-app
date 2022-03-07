import React from 'react';
import { Wrapper, WidthWrapper, List, ListElement, RightsReserved } from './Footer.styles';

export const Footer = props => {
  const footerData = [
    ['Beers', 'Our products', 'How we brew', 'Ingredients'],
    ['About', 'Our company', 'Contact'],
    ['Follow', 'Instagram', 'Twitter', 'Facebook']
  ];
  return (
    <Wrapper>
      <WidthWrapper>
        {footerData.map((section, idx) => {
          return (
            <List key={idx}>
              {section.map((option, idx) => {
                return <ListElement key={idx}>{option}</ListElement>;
              })}
            </List>
          );
        })}
        <RightsReserved>Copyright &copy; by Bartosz Hryniewicz</RightsReserved>
      </WidthWrapper>
    </Wrapper>
  );
};
