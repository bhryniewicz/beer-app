import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, WrapperDetails, Description, Title, Image } from './BeerItem.styles';
import { motion } from 'framer-motion';
import { InfinitySpin } from 'react-loader-spinner';

export const BeerItem = ({ id, name, image_url, abv, ph }, ...props) => {
  return (
    <Wrapper
      as={motion.div}
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>{name.length > 20 ? `${name.slice(0, 20)}...` : name}</Title>
      <Image
        src={image_url}
        alt={name}
        onLoad={<InfinitySpin type="Puff" color="#00BFFF" height={100} width={100} />}
      />
      <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sunt.
      </Description>
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
