import React from 'react';
import { Wrapper, Logo, Navigation, WidthWrapper } from './Header.styles';
import { NavLink } from 'react-router-dom';
import { MobileNav } from 'components/MobileNav/MobileNav';
import { Logo as HeaderLogo } from 'images';

export const Header = props => {
  const ifActive = ({ isActive }) => (isActive ? 'active' : '');
  const isWidth = false;

  return (
    <Wrapper>
      <WidthWrapper>
        <NavLink to="/">
          <Logo src={HeaderLogo}></Logo>
        </NavLink>
        <Navigation>
          <ul>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              Home
            </NavLink>
            <NavLink to="/beers" className={ifActive}>
              Products
            </NavLink>
            <NavLink to="/contact" className={ifActive}>
              Contact
            </NavLink>
            <NavLink to="/blog" className={ifActive}>
              Blog
            </NavLink>
          </ul>
        </Navigation>
        <MobileNav />
      </WidthWrapper>
    </Wrapper>
  );
};
