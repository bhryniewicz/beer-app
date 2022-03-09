import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, WrapperDetails, Description, Title, Image } from './BeerItem.styles';

export const BeerItem = ({ id, name, image_url, abv, ph }, ...props) => {
  return (
    <Wrapper>
      <Title>{name.length > 20 ? `${name.slice(0, 20)}...` : name}</Title>
      <Image src={image_url} alt={name} />
      <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sunt.</Description>
      <WrapperDetails>
        <p>
          Procentage: <span> {abv}</span>
        </p>
        <p>
          Number: <span> {id}</span>
        </p>
        <p>
          Ph: <span> {ph}</span>
        </p>
      </WrapperDetails>
    </Wrapper>
  );
};

BeerItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired
};
