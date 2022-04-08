import React from 'react';
import { Wrapper, WidthWrapper, Title, Info, Button, Heading, Wrap } from './Contact.styles';
import { Form } from 'components/Form/Form';

export const Contact = props => {
  const information = {
    '66': 'Baker Street 31/3',
    Poznan: '61-248',
    Poland: '',
    'Call us: ': '+48 883 535 227',
    'We are open from': 'Monday Friday',
    '08:00 am': '05:00 pm'
  };

  const socials = ['Instagram', 'Facebook', 'Twitter'];

  const newInformation = Object.entries(information);


  return (
    <Wrapper>
      <WidthWrapper>
        <div>
          <Title>Just beer with Us !</Title>
          <Info>Let us know more about You !</Info>
          <Form />
          <Button>Submit</Button>
        </div>
        <Wrap>
          <Title isBigger>
            Contact
            <br />
            Information
          </Title>
          <Info isBigger>
            {newInformation.map((newInfo, idx, arr) => {
              const [header, info] = newInfo;
              if (arr?.length - 1 === idx) {
                return (
                  <Heading key={idx}>
                    {header} - {info}
                  </Heading>
                );
              } else if (arr?.length - 2 === idx) {
                return (
                  <Heading key={idx}>
                    <br />
                    {header} {info}
                  </Heading>
                );
              } else {
                return (
                  <Heading key={idx}>
                    {header} {info}
                  </Heading>
                );
              }
            })}
          </Info>
          <Title>Follow Us</Title>
          <Info>
            {socials.map((social, idx) => {
              return (
                <Heading isBigger key={idx}>
                  {social}
                </Heading>
              );
            })}
          </Info>
        </Wrap>
      </WidthWrapper>
    </Wrapper>
  );
};
