import React from 'react';
import { Wrapper, Logo, Navigation } from './Header.styles';
import { NavLink } from 'react-router-dom';
import { Logo as HeaderLogo } from 'images';

export const Header = props => {
  const ifActive = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <Wrapper>
      <Logo src={HeaderLogo}></Logo>
      <Navigation>
        <ul>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Home
          </NavLink>
          <NavLink to="/beers" className={ifActive}>
            Products
          </NavLink>
          <NavLink to="/ttt" className={ifActive}>
            Info
          </NavLink>
        </ul>
      </Navigation>
    </Wrapper>
  );
};

Header.propTypes = {};
