import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Wrapper, PositionWrapper } from './AddToWishlist.styles';
import { Alert } from 'components/Alert/Alert';

export const AddToWishlist = ({ showAlert }) => {
  const heartStyles = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#03544B',
    fontSize: '20px'
  };

  return (
    <PositionWrapper onClick={showAlert}>
      <Wrapper>
        <AiFillHeart style={heartStyles} />
      </Wrapper>
    </PositionWrapper>
  );
};
