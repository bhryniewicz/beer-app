import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Wrapper, PositionWrapper, Alert } from './AddToWishlist.styles';

export const AddToWishlist = ({ ...props }) => {
  const [hide, setHide] = useState(false);
  const heartStyles = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#03544B',
    fontSize: '20px'
  };

  const showAlert = () => {
    setHide(true);

    setTimeout(() => {
      setHide(false);
    }, 2000);
  };

  return (
    <PositionWrapper onClick={showAlert}>
      <Wrapper>
        <AiFillHeart style={heartStyles} />
      </Wrapper>
      {hide ? <Alert /> : null}
    </PositionWrapper>
  );
};
