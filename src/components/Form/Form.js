import React from 'react';
import { InputBox } from 'components/InputBox/InputBox';
import { TextArea } from 'components/TextArea/TextArea';
import { Wrapper } from './Form.styles';

export const Form = props => {
  const placeholders = ['First Name', 'LastName', 'Mail', 'Phone'];

  return (
    <Wrapper>
      {placeholders.map((hold, idx) => {
        return <InputBox placeholder={hold} key={idx} />;
      })}
      <TextArea />
    </Wrapper>
  );
};
