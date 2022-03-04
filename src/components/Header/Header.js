import React from 'react';
import { Wrapper, Logo, Navigation } from './Header.styles';
import { Link } from 'react-router-dom';
import { Logo as HeaderLogo } from 'images';

export const Header = props => {
  return (
    <Wrapper>
      <Logo src={HeaderLogo}></Logo>
      <Navigation>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/beers">Products</Link>
          <Link to="/">Info</Link>
        </ul>
      </Navigation>
    </Wrapper>
  );
};

Header.propTypes = {};
